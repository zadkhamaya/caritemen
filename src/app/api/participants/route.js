import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const allParticipants = await prisma.participants.findMany({
      include: {
        user: {
          select: {
            username: true,
          },
        },
      },
    });
    return NextResponse.json(
      {
        data: allParticipants,
        message: "All participants fetched successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
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

    const existingParticipant = await prisma.participants.findFirst({
      where: {
        userId: userId,
        eventId: eventId,
      },
    });

    if (existingParticipant) {
      return NextResponse.json(
        { error: "User already registered for the event." },
        { status: 409 }
      );
    }

    const newParticipant = await prisma.participants.create({
      data: {
        user: {
          connect: { id: userId },
        },
        event: {
          connect: { id: eventId },
        },
      },
    });

    return NextResponse.json(
      {
        data: newParticipant,
        message: "User registered for the event successfully",
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
