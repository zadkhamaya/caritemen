"use client";

import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

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
            body: JSON.stringify({
                firstName,
                lastName,
                username,
                email,
                password,
            }),
        });
        const { message, errorMessage } = await res.json();
        if (errorMessage) {
            toast.error("Something wrong. Please try again later..");
            return;
        }
        toast.success("User Registered Successfully");
        router.push("/login");
    }

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="w-[360px] space-y-6">
            <h2>Register</h2>
            <form onSubmit={RegisterHandler}>
                <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                        <Input label="First Name" name="firstName" isRequired />
                        <Input name="lastName" label="Last Name" />
                    </div>
                    <Input name="username" label="Username" isRequired />
                    <Input name="email" label="Email" isRequired />
                    <Input
                        label="Password"
                        name="password"
                        isRequired
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
                    <Button color="primary" type="submit" className="w-full">
                        Register
                    </Button>
                </div>
                <Link
                    href="/login"
                    className="text-purple-500 hover:underline"
                >
                    Already have an account?{" "}
                    <span className="font-bold">Login</span>
                </Link>
            </form>
        </div>
    );
};

export default Register;
