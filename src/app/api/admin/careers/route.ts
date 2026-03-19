import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET all job positions
export async function GET() {
  try {
    const positions = await prisma.jobPosition.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ positions });
  } catch (error) {
    console.error("Error fetching positions:", error);
    return NextResponse.json({ error: "Failed to fetch positions" }, { status: 500 });
  }
}

// POST create new job position
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const position = await prisma.jobPosition.create({
      data: {
        title: data.title,
        department: data.department,
        location: data.location,
        type: data.type || "Full-time",
        experience: data.experience,
        salary: data.salary || null,
        description: data.description,
        requirements: data.requirements || [],
        responsibilities: data.responsibilities || [],
        benefits: data.benefits || [],
        isActive: data.isActive ?? true,
      },
    });

    return NextResponse.json({ position });
  } catch (error) {
    console.error("Error creating position:", error);
    return NextResponse.json({ error: "Failed to create position" }, { status: 500 });
  }
}

// PATCH update job position
export async function PATCH(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;

    if (!id) {
      return NextResponse.json({ error: "Position ID is required" }, { status: 400 });
    }

    const position = await prisma.jobPosition.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({ position });
  } catch (error) {
    console.error("Error updating position:", error);
    return NextResponse.json({ error: "Failed to update position" }, { status: 500 });
  }
}

// DELETE job position
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Position ID is required" }, { status: 400 });
    }

    await prisma.jobPosition.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting position:", error);
    return NextResponse.json({ error: "Failed to delete position" }, { status: 500 });
  }
}
