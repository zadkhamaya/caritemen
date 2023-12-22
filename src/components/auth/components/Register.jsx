"use client";

import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Register = () => {
  const router = useRouter();
  async function RegisterHandler(event) {
    event.preventDefault();

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!firstName || !username || !email || !password) {
      toast.error("Please fill in all required fields");
      return;
    }

    const res = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, username, email, password }),
    });
    const { message, errorMessage } = await res.json();
    if (errorMessage) {
      toast.error("Something wrong. Please try again later..");
      return;
    }
    toast.success("User Registered Successfully");
    router.push("/login");
  }

  return (
    <div className="w-[360px] space-y-6">
      <h2>Register</h2>
      <form onSubmit={RegisterHandler}>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <Input name="firstName" placeholder="First Name" required />
            <Input name="lastName" placeholder="Last Name" />
          </div>
          <Input name="username" placeholder="Username" required />
          <Input name="email" placeholder="Email" required />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            required
          />
          <Button color="primary" type="submit" className="w-full">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
