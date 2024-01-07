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

export default async function Page({ params }) {
  const { username, eventSlug } = params;
  const { data } = await getData(eventSlug);
  const { data: comments } = await getComments(eventSlug);

  return <SingleEvent data={data} comments={comments} />;
}
