import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET active job positions (public API)
export async function GET() {
  try {
    const positions = await prisma.jobPosition.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ positions });
  } catch (error) {
    console.error("Error fetching positions:", error);
    return NextResponse.json({ error: "Failed to fetch positions" }, { status: 500 });
  }
}
