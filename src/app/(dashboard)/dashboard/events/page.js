import { Events } from "@/components/dashboard/components/events";
import { AllEvent } from "@/components/events/allEvent";
import { EventCard } from "@/components/events/eventCard";
import { apiUrl, imageUrl } from "@/config/apiUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch(`${apiUrl}/events`);
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { data } = await getData();

  console.log(data);
  return (
    <main>
      <Events />
      <AllEvent eventsData={data} />
    </main>
  );
}
