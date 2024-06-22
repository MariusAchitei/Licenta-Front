// UserContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ profilePhoto: "" });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/api/user"); // Replace with actual user API endpoint
        setUser({ profilePhoto: response.data.profilePhoto });
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setUser({ profilePhoto: "fallbackPhotoWithDifferentBackground.png" }); // Replace with actual fallback image URL
      }
    };

    fetchUserProfile();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
