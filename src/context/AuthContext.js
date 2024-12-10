import { createContext, useEffect, useState } from "react";
import { deleteItem, getItem } from "../utils/session";
import { postService } from "../utils/services";

export const AuthContext = createContext({
  loading: true,
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  logOut: () => {},
  setToken: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(getItem("access_token"));

  const logOut = () => {
    deleteItem("access_token");
  };

  const checkLoginStatus = async () => {
    if (token) {
      const res = await postService("/auth/verifytoken");
      if (res) {
        setIsLoggedIn(true);
      } else {
        deleteItem("access_token");
      }
    }
    setLoading(false);
  };

  // check session
  useEffect(() => {
    setLoading(true);
    checkLoginStatus();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        loading,
        isLoggedIn,
        setIsLoggedIn,
        logOut,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
