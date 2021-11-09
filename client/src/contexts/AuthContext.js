import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(null);

  function getLoggedIn() {
    fetch("/api/auth/loggedIn")
      .then((res) => res)
      .then((data) => {
        setLoggedIn(data);
      });
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  const contextValus = {
    loggedIn,
    getLoggedIn,
  };

  return (
    <AuthContext.Provider value={contextValus}>
      {props.children}
    </AuthContext.Provider>
  );
};
