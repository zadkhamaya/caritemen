import { Events } from "@/components/dashboard/components/events";
import { AllEvent } from "@/components/events/allEvent";
import { apiUrl, imageUrl } from "@/config/apiUrl";

import React from "react";

async function getData() {
  const res = await fetch(`${apiUrl}/events`, {
    method: "GET",
    cache: "no-store",
  });
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
