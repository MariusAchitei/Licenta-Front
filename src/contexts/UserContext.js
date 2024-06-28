import React, { createContext, useState } from "react";
import UserPool from "utils/UserPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState([]);

  const login = (email, password) => {
    const user = new CognitoUser({ Username: email, Pool: UserPool });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    return new Promise((resolve, reject) => {
      user.authenticateUser(authDetails, {
        onSuccess: async (data) => {
          console.log("Authentication success:", data);
          setUser(data);
          try {
            const token = data.getIdToken().getJwtToken();
            const decodedToken = jwtDecode(token);
            const roles = decodedToken["cognito:groups"] || [];
            console.log("Roles:", roles);
            setRoles(roles);
            resolve(true);
          } catch (err) {
            console.error("Error decoding token:", err);
            resolve(false);
          }
        },
        onFailure: (err) => {
          console.error("Authentication error:", err);
          resolve(false);
        },
      });
    });
  };

  return (
    <UserContext.Provider value={{ user, roles, login }}>
      {children}
    </UserContext.Provider>
  );
};
