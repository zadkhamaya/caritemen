"use client";

import React from "react";
import Image from "next/image";
import { imageUrl } from "@/config/apiUrl";
import { Button } from "@nextui-org/react";

export const SingleEvent = ({ data, comments }) => {
  async function joinEventHandler() {
    const res = await fetch("/api/participants", {
      method: "POST",
      body: JSON.stringify({ eventId: data.id }),
    });
    const json = await res.json();
    console.log(json);
  }

  return (
    <main>
      <div className="flex justify-around gap-4">
        <Image alt={data.title} src={`${imageUrl}/${data.id}/${data.featuredImage}`} width={400} height={400} className="rounded-lg" />
        <div>
          <h1>{data.title}</h1>
          <div className="flex space-x-2">
            <div>{data.location}, </div>
            <div>{data.date}</div>
          </div>
          <div>{data.category}</div>
          <div>
            <div>Posted by {data.user.username}</div>
            <div>{data.createdAt}</div>
          </div>
          <h3>Event Details</h3>
          <div className="white-space-prewrap">{data.description}</div>
        </div>
        <div>
          <Button onClick={joinEventHandler}>Join Event</Button>
        </div>
      </div>
      <div>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <div>{comment.content}</div>
              <div>{comment.user?.username}</div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
