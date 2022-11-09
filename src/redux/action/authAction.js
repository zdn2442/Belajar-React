import Cookies from "js-cookie";
import { loginProses, registerProses, authMeProses } from "../../api/auth";

export function authLogin(payload) {
  return async (dispatch) => {
    try {
      let response = await loginProses(payload);
      let data = response.data;
      console.log("Data =>", data);
      dispatch({
        type: "login",
        name: data?.user?.name,
        email: data?.user?.email,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
}

export function authRegister(payload) {
  return async (dispatch) => {
    try {
      let response = await registerProses(payload);
      let data = response.data;
      dispatch({
        type: "login",
        name: data?.user?.name,
        email: data?.user?.email,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
}

export function authMe() {
  return async (dispatch) => {
    try {
      let response = await authMeProses();
      let data = response.data;
      dispatch({
        type: "login",
        name: data?.user?.name,
        email: data?.user?.email,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
}
