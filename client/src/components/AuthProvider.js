import React, { createContext, useContext, useState, useEffect } from "react";
// import cookie from "react-cookies";
import axios from "axios";
// import Axios from "axios";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = (props) => {
  let userObj = {
    pending: true,
    authenticated: false,
  };

  const [authData, setAuthData] = useState(userObj);

  const autoLogin = () => {
    axios
      .get("/auth/data", {
        withCredentials: true,
      })
      .then((res) => {
        setAuthData(res.data);
      });
  };

  useEffect(() => {
    autoLogin()
  }, []);

  const login = (user, pass, callback) => {
    axios
      .post("/auth/login", {
        username: "C0807811",
        password: "abc",
      })
      .then((res) => {
        callback(res.data);
        autoLogin()
      })
      .catch((err) => {});
  };

  const logout = (callback) => {};

  const consumerData = {
    authData,
    login,
    logout,
  }; //Provides above content to consumers

  return <AuthContext.Provider value={consumerData} {...props} />;
};

export default AuthProvider;
