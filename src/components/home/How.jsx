"use client";

import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export const How = () => {
    return (
        <>
            <Card
                shadow="none"
                className="border-2 rounded-3xl p-4 bg-gradient-to-tr from-purple-500 to-blue-500"
            >
                <h2 className="text-center text-2xl font-semibold text-purple-200 underline">
                    How It Works
                </h2>
                <CardBody className="text-purple-200 text-xl">
                    <ul>
                        <li>
                            1. Create Your Profile: Share your interests and what
                            you're passionate about.
                        </li>
                        <li>
                            2. Find Your Match: Browse profiles with similar
                            interests in your area.
                        </li>
                        <li>
                            3. Plan an Activity: Use our intuitive planning tool to
                            arrange meet-ups, activities, and group events.
                        </li>
                        <li>
                            4. Interest-Based Groups: Join groups ranging from
                            hiking enthusiasts to book club aficionados.
                        </li>
                        
                    </ul>
                </CardBody>
            </Card>
        </>
    );
};
