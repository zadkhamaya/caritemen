"use client";

import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import React from "react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { useState } from "react";
import Link from "next/link";

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
            <h2 className="text-purple-500">Login</h2>
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
                    <Button color="secondary" className="w-full" type="submit">
                        Login
                    </Button>
                </div>
                <Link
                    href="/register"
                    className="text-purple-500 hover:underline"
                >
                    Don't have an account?{" "}
                    <span className="font-bold">Register</span>
                </Link>
            </form>
        </div>
    );
};

export default Login;
