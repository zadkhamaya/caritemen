import React from "react";

const AuthLayout = ({ children }) => {
    return (
        <main className="">
            <section className="flex justify-center items-center">
                {children}
            </section>
        </main>
    );
};

export default AuthLayout;
