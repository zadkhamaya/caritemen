"use client";

import React from "react";
import { Card, CardBody, Button, Link } from "@nextui-org/react";

export const Hero = () => {
    return (
        <>
            <h1 className="text-5xl bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
                Connect, Share, and Explore with Like-Minded Souls!
            </h1>
            <p className="text-2xl text-purple-500">
                "Ready to explore? Join{" "}
                <span className="font-bold text-purple-700">CariTemen</span>{" "}
                today and start your journey towards exciting friendships and
                experiences!"
            </p>

            <Button
                as={Link}
                href="/event-list"
                radius="full"
                className="bg-gradient-to-tr from-blue-500 to-purple-500 text-white shadow-lg"
                size="lg"
            >
                See All Events
            </Button>
        </>
    );
};
