import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <main className="grid grid-cols-2 h-screen">
      <section className="bg-black" />
      <section className="flex justify-center items-center">{children}</section>
    </main>
  );
};

export default AuthLayout;
