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

  console.log(data);

  return (
    <main>
      <div className="flex justify-around gap-4">
        <Image
          alt={data.title}
          src={`${imageUrl}/${data.id}/${data.featuredImage}`}
          width={400}
          height={400}
          className="rounded-lg"
        />
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
      </div>
    </main>
  );
}
