import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// POST create new note
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const note = await prisma.note.create({
      data: {
        content: data.content,
        author: data.author || "Admin",
        projectId: data.projectId,
      },
    });

    // Add activity log
    await prisma.activityLog.create({
      data: {
        action: "New note added",
        user: "Admin",
        projectId: data.projectId,
      },
    });

    return NextResponse.json({ note });
  } catch (error) {
    console.error("Error creating note:", error);
    return NextResponse.json({ error: "Failed to create note" }, { status: 500 });
  }
}

// DELETE note
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Note ID is required" }, { status: 400 });
    }

    const note = await prisma.note.findUnique({ where: { id } });

    if (!note) {
      return NextResponse.json({ error: "Note not found" }, { status: 404 });
    }

    await prisma.note.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting note:", error);
    return NextResponse.json({ error: "Failed to delete note" }, { status: 500 });
  }
}
