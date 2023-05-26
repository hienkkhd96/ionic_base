import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, userLogin } from "../../service/user";
export const login = createAsyncThunk(
  "user/login",
  async (formData: { username: string; password: string }) => {
    try {
      const response: any = await userLogin(formData);
      if (!!response.success) {
        return response.data;
      } else {
        throw new Error(response?.message);
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
);
interface UserState {
  // userid: string,
  msgCode: string | null;
  isLoading: boolean;
  username: string;
  accessToken: string | null;
  error: object | null;
  authorName: string | null;
  lang?: string | null;
}

const userInitialState: UserState = {
  // userid: '',
  isLoading: false,
  msgCode: "",
  username: "",
  accessToken: "",
  error: null,
  authorName: "",
};

function startLoading(state: UserState) {
  state.isLoading = true;
}

function loadingFailed(state: UserState, action: PayloadAction<any>) {
  state.isLoading = false;
  state.error = action.payload;
}

function reset(state: UserState) {
  state.msgCode = null;
  state.isLoading = false;
  state.error = null;
}

const user = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    startLogIn: startLoading,
    setUser(state, { payload }: PayloadAction<User>) {
      const { accessToken, authorName } = payload;
      state.accessToken = accessToken;
      state.isLoading = false;
      state.authorName = authorName;
    },
    logInFailure: loadingFailed,
    logOut: (_state): any => {
      return {};
    },
    setLanguage: (state, { payload }) => {
      state.lang = payload?.lang;
    },
    resetState: reset,
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const { accessToken, authorName } = action.payload;
      state.accessToken = accessToken;
      state.isLoading = false;
      state.authorName = authorName;
    });
  },
});

export const {
  setUser,
  startLogIn,
  logInFailure,
  logOut,
  resetState,
  setLanguage,
} = user.actions;

export default user.reducer;
