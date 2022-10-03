import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export default function ProtectRoutes({ children }) {
  const auth = Cookies.get("myapps_token");
  console.log(auth);
  return auth !== undefined ? children : <Navigate to="/login" />;
}
