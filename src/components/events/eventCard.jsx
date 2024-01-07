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
    <div className="pt-8 pb-16">
      <Link href={`/${username}/events/${slug}`}>
      <div className="h-full w-fit rounded-md bg-indigo-50 flex items-center">

        <Image
          alt={title}
          src={`${imageUrl}/${id}/${featuredImage}`}
          width={300}
          height={300}
          className="rounded-lg cursor-pointer hover:scale-95 trasition duration-200 h-auto w-fit"
        />
      
      </div>
      </Link>

      <div>
        <h5>{title}</h5>
        <h7>{date}</h7>
        <div>{location}</div>
      </div>
    
    </div>
  );
};
