import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const searchParams = request.nextUrl.searchParams;
  const slug = searchParams.get("slug");
  console.log(slug);

  try {
    const allComments = await prisma.comment.findMany({
      where: {
        slug,
      },
    });

    return NextResponse.json({
      data: allComments,
      message: "All comments fetched successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching events" });
  }
}

export async function POST() {
  const { eventId } = await req.json();

  //Get User ID form token
  const cookieStore = cookies();
  const token = cookieStore.get("token").value;
  const decoded = verify(token, process.env.JWT_SECRET);
  const userId = decoded.id;

  try {
    if (!userId || !eventId) {
      return NextResponse.json(
        { error: "Missing userId or eventId" },
        { status: 400 }
      );
    }

    const newComment = await prisma.comment.create({
      data: {
        user: {
          connect: { id: userId },
        },
        event: {
          connect: { id: eventId },
        },
        content,
      },
    });

    return NextResponse.json(
      {
        data: newComment,
        message: "Comment posted successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
