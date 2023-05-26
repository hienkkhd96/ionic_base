import axios from "../axiosInstance";
import Endpoints from "../../constants/endpoints";

export interface User {
  // userid: string,
  authorName: string;
  accessToken: string;
  // email: string,
}

export interface UserResult {
  success: boolean | null;
  data: User;
  msgCode: string | null;
  errors: object | null;
}

export async function userLogin(formData: object): Promise<UserResult> {
  try {
    const response: any = await axios().post(Endpoints.LOGIN, formData);
    return {
      success: response["result"],
      data: {
        // userid: response.data['userid'],
        accessToken: response.data["accessToken"],
        authorName: response.data["displayName"],
        // email: response.data['email']
      },
      msgCode: response["message"],
      errors: response["message"],
    };
  } catch (error) {
    throw error;
  }
}
export async function getMe(): Promise<UserResult> {
  try {
    const response: any = await axios().get(Endpoints.GET_ME);
    return {
      success: response["result"],
      data: {
        // userid: response.data['userid'],
        accessToken: response.data["accessToken"],
        authorName: response.data["displayName"],
        // email: response.data['email']
      },
      msgCode: response["message"],
      errors: response["message"],
    };
  } catch (error) {
    throw error;
  }
}
