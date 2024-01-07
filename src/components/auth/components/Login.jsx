"use client";

import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import React from "react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { useState } from "react";

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

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="w-[360px] space-y-6">
      <h2>Login</h2>
      <form onSubmit={LoginHandler}>
        <div className="space-y-2">
          <Input name="email" label="Email" />
          <Input
            label="Password"
            name="password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
          <Button color="primary" className="w-full" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
