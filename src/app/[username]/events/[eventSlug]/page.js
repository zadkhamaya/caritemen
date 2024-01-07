import { SingleEvent } from "@/components/events/singleEvent";
import { apiUrl, imageUrl } from "@/config/apiUrl";
import Image from "next/image";

async function getData(eventSlug) {
  const res = await fetch(`${apiUrl}/events?slug=${eventSlug}`, {
    method: "GET",
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

async function getComments(eventSlug) {
  const res = await fetch(`${apiUrl}/comments?slug=${eventSlug}`, {
    method: "GET",
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}
// function formatDate(dateString) {
//   const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   };
//   return new Intl.DateTimeFormat("en-US", options).format(new Date(dateString));
// }

// let dateStr = "";
// const formattedDate = formatDate(dateStr);
// console.log(formattedDate); // Outputs something like "Friday, January 4, 2024"

export default async function Page({ params }) {
  const { username, eventSlug } = params;
  const { data } = await getData(eventSlug);
  const { data: comments } = await getComments(eventSlug);

  console.log(comments);

  return <SingleEvent data={data} />;
}
