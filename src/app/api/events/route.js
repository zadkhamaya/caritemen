import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { uploadFile } from "@/lib/uploadFile";

export async function GET() {
  try {
    const allEvents = await prisma.event.findMany();
    return NextResponse.json({
      data: allEvents,
      message: "All events fetched successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching events" });
  }
}

export async function POST(request) {
  const formData = await request.formData();
  const title = formData.get("title");
  const date = formData.get("date"); //event date
  const location = formData.get("location");
  const description = formData.get("description");
  const featuredImage = formData.get("featuredImage");
  const images = formData.get("images");
  const category = formData.get("category");

  // Send Images to AWS S3
  try {
    const uploadFeaturedImage = await uploadFile({
      Body: featuredImage,
      Key: featuredImage.name,
      ContentType: featuredImage.type,
      Dir: "events",
    });
    console.log(uploadFeaturedImage);
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({
    data: {
      title,
      date,
      location,
      description,
      featuredImage,
      images,
      category,
    },
    message: "Event created successfully",
  });
}
