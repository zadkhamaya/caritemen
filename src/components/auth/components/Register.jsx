"use client";

import { Button, Input } from "@nextui-org/react";
import React from "react";

const Register = () => {
  async function RegisterHandler(event) {
    event.preventDefault();

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const userName = event.target.userName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, username, email, password }),
    });
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="w-[360px] space-y-6">
      <h2>Register</h2>
      <form onSubmit={RegisterHandler}>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <Input name="firstName" placeholder="First Name" />
            <Input name="lastName" placeholder="Last Name" />
          </div>
          <Input name="userName" placeholder="Username" />
          <Input name="email" placeholder="Email" />
          <Input name="password" placeholder="Password" type="password" />
          <Button type="submit">Register</Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
