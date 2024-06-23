import React, { createContext, useState, useContext, useEffect } from "react";
import LoadingScreen from "pages/Loading";
// Create the UserContext
export const UserContext = createContext();

// Custom hook to use the UserContext
// export const useUser = () => useContext(UserContext);

// Mock users
const mockUsers = [
  {
    email: "user@example.com",
    password: "user123",
    role: "user",
    id: 1,
    name: "John Doe",
  },
  {
    email: "medic@example.com",
    password: "medic123",
    role: "medic",
    id: 2,
    name: "Dr. Jane Smith",
  },
  {
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
    id: 3,
    name: "Admin User",
  },
];

// UserProvider component to wrap around the app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching user data
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      console.log("Am gasit user in local storage");
      setUser(userData);
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const authenticatedUser = mockUsers.find(
      (u) => u.email === email && u.password === password,
    );
    console.log(`the authenticated user is\n ${authenticatedUser}`);
    if (authenticatedUser) {
      console.log("AM SETAT USER");
      setUser(authenticatedUser);
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return loading ? (
    LoadingScreen
  ) : (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );

  // return (
  //   <UserContext.Provider value={{ user, login, logout }}>
  //     {loading ? <div>Loading...</div> : children}
  //   </UserContext.Provider>
  // );
};
