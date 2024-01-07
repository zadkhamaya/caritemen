import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export const Events = () => {
  return (
    <section className="flex justify-between items-end">
      <div>
        <h3>All Events</h3>
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
