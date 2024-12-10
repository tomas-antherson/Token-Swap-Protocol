import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const contextValue = useContext(AuthContext);
  return contextValue;
};