import Cookies from "js-cookie";
import axios, { syncToken } from "./axios_base_2";

export function loginProses(payload) {
  return axios.post("/login", payload);
}
export function registerProses(payload) {
  return axios.post("/register", payload);
}
export function authMeProses() {
  syncToken();
  return axios.get("/authme");
}
