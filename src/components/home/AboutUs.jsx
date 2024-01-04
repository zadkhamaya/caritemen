"use client";

import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export const AboutUs = () => {
    return (
        <div className="flex w-full flex-col mb-48 border-2 rounded-3xl p-4 bg-gradient-to-tr from-purple-500 to-blue-500">
            <h2 className="text-center text-2xl font-semibold text-purple-200 underline">
                About Us
            </h2>
            <Tabs
                aria-label="Options"
                className="text-purple-200"
                radius="full"
                color="secondary"
            >
                <Tab
                    key="values"
                    title="Our values"
                    className=" text-purple-200"
                >
                    <Card>
                        <CardBody className="text-purple-200 bg-gradient-to-tr from-blue-500 to-purple-500 ">
                            Community Building, Inclusivity, and Passion for
                            Exploration
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="mission" title="Our mission">
                    <Card>
                        <CardBody className="text-purple-200 bg-gradient-to-tr from-blue-500 to-purple-500 ">
                            At CariTemen, we believe in the power of connection
                            through shared interests. Our mission is to make the
                            world smaller by bringing like-minded individuals
                            together.
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="story" title="Our Story">
                    <Card>
                        <CardBody className="text-purple-200 bg-gradient-to-tr from-blue-500 to-purple-500 ">
                            Founded by a group of friends who struggled to find
                            a community, CariTemen was born from the desire to
                            make connecting with people who share your passions
                            simple and fun.
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    );
};
