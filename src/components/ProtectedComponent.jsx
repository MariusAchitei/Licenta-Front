import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import axiosInstance from "../utils/axiosInstance";

export function ProtectedComponent({ role = "USER", children }) {
  // const { user, updateUser } = useContext(UserContext);
  // const roles = {
  //   USER: 0,
  //   ADMIN: 1,
  // };
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const token = sessionStorage.getItem("token");
  //   if (!token) {
  //     navigate("/login");
  //   }
  //   axiosInstance
  //     .post("/v51/sessions/token", {})
  //     .then((data) => {
  //       updateUser(data.data);
  //     })
  //     .catch(() => {
  //       sessionStorage.removeItem("token");
  //       navigate("/login");
  //     });
  // }, [navigate]);
  // if (roles[user.role] < roles[role]) {
  //   navigate("/login");
  //   return null;
  // }
  return children;
}
