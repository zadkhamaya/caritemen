import { Events } from "@/components/dashboard/components/events";
import { AllEvent } from "@/components/events/allEvent";
import { apiUrl, imageUrl } from "@/config/apiUrl";
import React from "react";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

async function getData() {
  const cookieStore = cookies();
  const token = cookieStore.get("token").value;
  const decoded = verify(token, process.env.JWT_SECRET);
  const userId = decoded.id;

  const res = await fetch(`${apiUrl}/events`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { data } = await getData();

  return (
    <main>
      <Events />
      <AllEvent eventsData={data} />
    </main>
  );
}
