"use client";

import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/navigation";

export const CreateEvent = () => {
  const router = useRouter();

  async function createEventHandler(event) {
    event.preventDefault();
    const formData = new FormData();

    const title = event.target.title.value;
    const date = event.target.date.value;
    const location = event.target.location.value;
    const description = event.target.description.value;
    const featuredImage = event.target.featuredImage.files[0];

    formData.append("title", title);
    formData.append("date", date);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("featuredImage", featuredImage);

    const res = await fetch("/api/events", {
      method: "POST",
      body: formData,
    });

    if (res.status === 201) {
      router.push("/dashboard/events");
    }
  }

  return (
    <main className="space-y-8">
      <section>
        <div>
          <h3>Create Event</h3>
          <p>Here you can create your event.</p>
        </div>
      </section>
      <form onSubmit={createEventHandler}>
        <section className="space-y-4">
          <Input name="title" label="Event Title" />
          <Input name="date" type="date" />
          <Select name="location" label="Event Location">
            <SelectItem key="jakarta">Jakarta</SelectItem>
            <SelectItem key="bekasi">Bekasi</SelectItem>
            <SelectItem key="Bogor">Bogor</SelectItem>
            <SelectItem key="Depok">Depok</SelectItem>
            <SelectItem key="Tangerang">Tangerang</SelectItem>
            <SelectItem key="Bandung">Bandung</SelectItem>
            <SelectItem key="Surabaya">Surabaya</SelectItem>
            <SelectItem key="Sidoarjo">Sidoarjo</SelectItem>
            <SelectItem key="Kediri">Kediri</SelectItem>
          </Select>
          <Textarea name="description" label="Event Description" />
          <Input name="featuredImage" type="file" />
          <Button type="submit" color="primary">
            Create Event
          </Button>
        </section>
      </form>
    </main>
  );
};
