import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [loggedUser, setLoggedUser] = useState({});

  async function getLoggedIn() {
    const loggedInRes = await axios.post("/api/auth/loggedIn");
    setLoggedIn(loggedInRes.data.massege);
    if (loggedInRes.data.loggedUser) {
      setLoggedUser(loggedInRes.data.loggedUser);
    } else {
      setLoggedUser({});
    }
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  async function logOut() {
    await axios.post("/api/auth/logout");
    await getLoggedIn();
  }

  async function register(data) {
    try {
      const registerData = data;
      await axios.post("/api/auth", registerData);
      getLoggedIn();
    } catch (err) {
      console.log(err);
    }
  }
  async function login(data) {
    try {
      const loginData = data;
      await axios.post("/api/auth/login", loginData);
      getLoggedIn();
    } catch (err) {
      console.log(err);
    }
  }

  const contextValus = {
    loggedIn,
    getLoggedIn,
    logOut,
    register,
    login,
    loggedUser,
  };
  return (
    <AuthContext.Provider value={contextValus}>
      {props.children}
    </AuthContext.Provider>
  );
};
