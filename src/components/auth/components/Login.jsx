"use client";

import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import React from "react";

const Login = () => {
  const router = useRouter();

  async function LoginHandler(event) {
    event.preventDefault();
    console.log("Login");

    const email = event.target.email.value;
    const password = event.target.password.value;

    const res = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const { message, errorMessage } = await res.json();
    if (errorMessage) {
      toast.error("Wrong Username/Password");
      return;
    }
    toast.success("Login Successfully");
    router.push("/dashboard");
  }

  return (
    <div className="w-[360px] space-y-6">
      <h2>Login</h2>
      <form onSubmit={LoginHandler}>
        <div className="space-y-2">
          <Input name="email" placeholder="Email" />
          <Input name="password" placeholder="Password" type="password" />
          <Button color="primary" className="w-full" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
