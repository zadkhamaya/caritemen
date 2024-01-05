import React from "react";
import { EventCard } from "./eventCard";

export const AllEvent = ({ eventsData }) => {
  return (
    <section className="grid grid-cols-3 gap-4">
      {eventsData.map(
        ({ id, title, slug, location, date, featuredImage, user }) => {
          return (
            <EventCard
              key={id}
              title={title}
              slug={slug}
              date={date}
              location={location}
              featuredImage={featuredImage}
              id={id}
              username={user.username}
            />
          );
        }
      )}
    </section>
  );
};
