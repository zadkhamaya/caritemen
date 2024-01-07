import React from "react";
import Link from "next/link";
import Image from "next/image";
import { imageUrl } from "@/config/apiUrl";

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
    <div>
      <Link href={`/${username}/events/${slug}`}>
        <Image
          alt={title}
          src={`${imageUrl}/${id}/${featuredImage}`}
          width={300}
          height={300}
          className="rounded-lg cursor-pointer hover:scale-105 trasition duration-200"
        />
      </Link>
      <div>{title}</div>
      <div>{date}</div>
      <div>{location}</div>
    </div>
  );
};
