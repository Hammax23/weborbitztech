import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET all projects with related data
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        tasks: true,
        milestones: true,
        notes: true,
        activityLogs: {
          orderBy: { timestamp: "desc" },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

// POST create new project
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const project = await prisma.project.create({
      data: {
        projectName: data.projectName,
        description: data.description || "",
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        clientPhone: data.clientPhone,
        companyName: data.companyName || "",
        services: data.services || [],
        status: data.status || "discovery",
        priority: data.priority || "medium",
        progress: data.progress || 0,
        budget: data.budget || 0,
        spent: data.spent || 0,
        startDate: data.startDate ? new Date(data.startDate) : null,
        deadline: data.deadline ? new Date(data.deadline) : null,
        teamMembers: data.teamMembers || [],
                activityLogs: {
          create: {
            action: "Project created",
            user: "Admin",
          },
        },
      },
      include: {
        tasks: true,
        milestones: true,
        notes: true,
        activityLogs: true,
      },
    });

    return NextResponse.json({ project });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}

// PATCH update project
export async function PATCH(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;

    if (!id) {
      return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    // Handle date conversions
    if (updateData.startDate) {
      updateData.startDate = new Date(updateData.startDate);
    }
    if (updateData.deadline) {
      updateData.deadline = new Date(updateData.deadline);
    }

    // Add activity log for status/priority changes
    const activityData: { action: string; user: string }[] = [];
    if (updateData.status) {
      activityData.push({ action: `Status changed to ${updateData.status}`, user: "Admin" });
    }
    if (updateData.priority) {
      activityData.push({ action: `Priority changed to ${updateData.priority}`, user: "Admin" });
    }

    const project = await prisma.project.update({
      where: { id },
      data: {
        ...updateData,
        activityLogs: activityData.length > 0 ? { create: activityData } : undefined,
      },
      include: {
        tasks: true,
        milestones: true,
        notes: true,
        activityLogs: { orderBy: { timestamp: "desc" } },
      },
    });

    return NextResponse.json({ project });
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}

// DELETE project
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    await prisma.project.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
