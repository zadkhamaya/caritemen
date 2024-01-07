"use client";

import React from "react";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const Logout = () => {
    const router = useRouter();

    const deleteCookie = (name) => {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    };

    const logoutHandler = () => {
        deleteCookie("token");
        toast.success("Logout Successfully"),
            setTimeout(() => router.push("/login"), 500);
    };

    return (
        <div onClick={logoutHandler} className="menu">
            <LogOut />
            Logout
        </div>
    );
};
