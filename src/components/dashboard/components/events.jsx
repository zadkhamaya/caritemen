import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export const Events = () => {
  return (
    <section className="flex justify-between items-end border-b-8 border-indigo-500 pb-4">
      <div>
        <h2>All Events</h2>
        <p>Here you can see all your created events.</p>
      </div>

      <Link href="/dashboard/events/add">
        <Button shadow color="primary">
          Create Event
        </Button>
      </Link>

    </section>
  );
};
