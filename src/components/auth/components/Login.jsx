"use client";

import { Button, Input } from "@nextui-org/react";
import React from "react";

const Login = () => {
  function LoginHandler(event) {
    event.preventDefault();
    console.log("Login");

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email);
    console.log(password);
  }

  return (
    <div className="w-[360px] space-y-6">
      <h2>Login</h2>
      <form onSubmit={LoginHandler}>
        <div className="space-y-2">
          <Input name="email" placeholder="Email" />
          <Input name="password" placeholder="Password" type="password" />
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
