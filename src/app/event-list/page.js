import Search from "@/components/events/Search";
import React from "react";
import { apiUrl, imageUrl } from "@/config/apiUrl";
import { Image } from "@nextui-org/react";
import { Events } from "@/components/dashboard/components/events";
import { AllEvent } from "@/components/events/allEvent";

async function getData() {
    const res = await fetch(`${apiUrl}/events`);
    const data = await res.json();
    return data;
}

export default async function EventList() {
    const { data } = await getData();

    return (
        <>
            {/* <Search /> */}
            <section className="mt-12">
                <AllEvent eventsData={data} />
            </section>
        </>
    );
}
