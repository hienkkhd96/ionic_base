import axios from "axios";
import ApiConfig from "../../configs/apiConfig";
import { createBrowserHistory } from "history";
import { store } from "../../store";
import Routes from "../../constants/routes";

const apiConfig = ApiConfig();

const instance = () => {
  const history = createBrowserHistory();
  const { accessToken, authorName } = store.getState().user;

  let headers: any = {
    "Content-Type": "application/json",
  };
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }
  let axiosInstance = axios.create({
    baseURL: apiConfig.BASE_URL,
    headers: headers,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      if (config.data) {
        const haveFile = Object.values(config.data).some(
          (e: any) => e && e.toString() === "[object File]"
        );
        if (haveFile) {
          config.headers["Content-Type"] = "multipart/form-data";
        }
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (error.response && error.response.data) {
        if (error?.response?.status === 401) {
        //   reactLocalStorage.clear();
          history.push(Routes.LOGIN);
          window.location.reload();
        }
        const { errorCode, message } = error.response.data;
        if (errorCode) {
        //   toast.error(message);
        }
        return Promise.reject({ ...error.response.data });
      } else {
        return Promise.reject({
          error: true,
          message: "Error Code 100: No response error from server",
          statusCode:
            error && error.request && error.request.status
              ? error.request.status
              : "500",
        });
      }
    }
  );
  return axiosInstance;
};

export default instance;
