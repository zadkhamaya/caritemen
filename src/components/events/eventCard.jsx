import React from "react";
import Link from "next/link";
import { imageUrl } from "@/config/apiUrl";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export const EventCard = ({
    id,
    username,
    slug,
    title,
    featuredImage,
    date,
    location,
}) => {
    return (
        <Link href={`/${username}/events/${slug}`}>
            <Card className="py-4 ">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="uppercase font-bold text-purple-300 text-medium">
                        {location}
                    </p>
                    <small className="text-default-500 ">{date}</small>
                    <h4 className="font-bold text-large text-purple-500">
                        {title}
                    </h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt={title}
                        src={`${imageUrl}/${id}/${featuredImage}`}
                        width={300}
                        height={300}
                        className="rounded-lg cursor-pointer hover:scale-105 trasition duration-200"
                    />
                </CardBody>
            </Card>
        </Link>
    );
};
