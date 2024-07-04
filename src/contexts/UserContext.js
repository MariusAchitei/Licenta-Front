import React, { createContext, useState, useEffect } from "react";
import UserPool from "utils/UserPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "utils/axiosInstance";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("idToken");
    if (storedToken) {
      const decodedToken = jwtDecode(storedToken);
      setUser(decodedToken);
      console.log("Decoded token: ", decodedToken);
      if (decodedToken["cognito:groups"]?.length > 0) {
        setRoles(decodedToken["cognito:groups"] || []);
      } else {
        setRoles(["user"]);
      }
    }
  }, []);

  const login = (email, password) => {
    const user = new CognitoUser({ Username: email, Pool: UserPool });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    return new Promise((resolve, reject) => {
      user.authenticateUser(authDetails, {
        onSuccess: async (data) => {
          const token = data.getIdToken().getJwtToken();
          localStorage.setItem("idToken", token); // Store the ID token
          const decodedToken = jwtDecode(token);
          setUser(decodedToken);
          console.log("Decoded token: ", decodedToken);
          setRoles(decodedToken["cognito:groups"] || []);
          resolve(true);
        },
        onFailure: (err) => {
          console.error("Authentication error:", err);
          resolve(false);
        },
      });
    });
  };

  const logout = () => {
    localStorage.removeItem("idToken");
    setUser(null);
    setRoles([]);
  };

  const getIdentity = async () => {
    try {
      const response = await axiosInstance.get("/medics/identity");
      return response.data;
    } catch (error) {
      console.error("Error fetching medics: ", error);
      return null;
    }
  };

  return (
    <UserContext.Provider value={{ user, roles, login, logout, getIdentity }}>
      {children}
    </UserContext.Provider>
  );
};
