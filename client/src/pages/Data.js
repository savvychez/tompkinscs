import React, { useState } from "react";
import { useAuth } from "../components/AuthProvider";

const Data = () => {
  const [pre, setPre] = useState("UNSET");

  const { login, authData } = useAuth();

  const log = () => {
    login("C0807811", "abc", (res) => {
      setPre(res);
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={log}>Log!</button>
      <h1>Pre</h1>
      <pre>{pre}</pre>
      <h1>User Data</h1>
      <pre>{JSON.stringify(authData)}</pre>
    </div>
  );
};

export default Data;
