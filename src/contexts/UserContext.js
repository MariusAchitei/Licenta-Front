import React, { createContext, useState, useEffect } from "react";
import UserPool from "utils/UserPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("idToken");
    if (storedToken) {
      const decodedToken = jwtDecode(storedToken);
      setUser(decodedToken);
      setRoles(decodedToken["cognito:groups"] || []);
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

  return (
    <UserContext.Provider value={{ user, roles, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
