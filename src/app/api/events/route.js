import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { uploadFile } from "@/lib/uploadFile";
import slugify from "slugify";

export async function GET() {
  try {
    const allEvents = await prisma.event.findMany({
      include: {
        user: {
          select: {
            username: true,
          },
        },
      },
    });
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
  // const category = formData.get("category");
  const userId = formData.get("userId");

  let eventId = "";

  try {
    // const allImages = [];
    // images.forEach((image) => {
    //   allImages.push(image.name);
    // });
    const createEvent = await prisma.event.create({
      data: {
        title,
        slug: slugify(title, { lower: true, replacement: "-" }),
        date,
        location,
        description,
        featuredImage: featuredImage.name,
        // images: allImages,
        user: {
          connect: { id: userId },
        },
      },
    });

    eventId = createEvent.id;
    console.log(createEvent);
  } catch (error) {
    console.log(error);
  }

  // Send Images to AWS S3
  try {
    // upload featuredImage
    const uploadFeaturedImage = await uploadFile({
      Body: featuredImage,
      Key: featuredImage.name,
      ContentType: featuredImage.type,
      Dir: `events/${eventId}`,
    });
    console.log(uploadFeaturedImage);

    // upload images file
    images.forEach(async (item) => {
      const uploadFeaturedImage = await uploadFile({
        Body: item,
        Key: item.name,
        ContentType: item.type,
        Dir: `events/${eventId}`,
      });
      console.log(uploadFeaturedImage);
    });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({
    message: "Event created successfully",
  });
}
