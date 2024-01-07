import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { uploadFile } from "@/lib/uploadFile";
import slugify from "slugify";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const slug = searchParams.get("slug");
  const userId = searchParams.get("userId");

  try {
    if (slug) {
      const event = await prisma.event.findUnique({
        where: {
          slug,
        },
        include: {
          user: {
            select: {
              username: true,
            },
          },
        },
      });
      return NextResponse.json({
        data: event,
        message: "Event fetched successfully",
      });
    }

    if (userId) {
      const event = await prisma.event.findMany({
        where: {
          userId,
        },
        include: {
          user: {
            select: {
              username: true,
            },
          },
        },
      });
      return NextResponse.json({
        data: event,
        message: "Event fetched successfully",
      });
    }

    const events = await prisma.event.findMany({
      include: {
        user: {
          select: {
            username: true,
          },
        },
      },
    });
    return NextResponse.json({
      data: events,
      message: "All events fetched successfully",
      cache: "no-store",
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
  const category = formData.get("category");
  const location = formData.get("location");
  const description = formData.get("description");
  const featuredImage = formData.get("featuredImage");

  //Get User ID form token
  const cookieStore = cookies();
  const token = cookieStore.get("token").value;
  const decoded = verify(token, process.env.JWT_SECRET);
  const userId = decoded.id;

  let eventId = "";

  try {
    const createEvent = await prisma.event.create({
      data: {
        title,
        slug: slugify(title, { lower: true, replacement: "-" }),
        date,
        category,
        location,
        description,
        featuredImage: featuredImage.name,
        userId,
      },
    });

    await prisma.participants.create({
      data: {
        eventId: createEvent.id,
        userId,
      },
    });

    eventId = createEvent.id;
    console.log(createEvent);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Event created failed",
      },
      { status: 500 }
    );
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
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json(
    {
      message: "Event created successfully",
    },
    { status: 201 }
  );
}
