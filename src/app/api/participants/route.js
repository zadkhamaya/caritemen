import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

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
    return NextResponse.json({
      data: allParticipants,
      message: "All participants fetched successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching participants" });
  }
}

export async function POST(req) {
  try {
    const { userId, eventId } = req.body;

    if (!userId || !eventId) {
      return res;
    }
  } catch (error) {}
}
