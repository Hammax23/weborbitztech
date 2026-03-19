import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// POST create new task
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const task = await prisma.task.create({
      data: {
        title: data.title,
        description: data.description || "",
        status: data.status || "pending",
        priority: data.priority || "medium",
        dueDate: data.dueDate ? new Date(data.dueDate) : null,
        assignee: data.assignee || "",
        projectId: data.projectId,
      },
    });

    // Add activity log
    await prisma.activityLog.create({
      data: {
        action: `Task "${task.title}" added`,
        user: "Admin",
        projectId: data.projectId,
      },
    });

    // Update project progress
    await updateProjectProgress(data.projectId);

    return NextResponse.json({ task });
  } catch (error) {
    console.error("Error creating task:", error);
    return NextResponse.json({ error: "Failed to create task" }, { status: 500 });
  }
}

// PATCH update task
export async function PATCH(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, projectId, ...updateData } = data;

    if (!id) {
      return NextResponse.json({ error: "Task ID is required" }, { status: 400 });
    }

    if (updateData.dueDate) {
      updateData.dueDate = new Date(updateData.dueDate);
    }

    const task = await prisma.task.update({
      where: { id },
      data: updateData,
    });

    // Add activity log
    if (updateData.status) {
      await prisma.activityLog.create({
        data: {
          action: `Task "${task.title}" status changed to ${updateData.status}`,
          user: "Admin",
          projectId: task.projectId,
        },
      });
    }

    // Update project progress
    await updateProjectProgress(task.projectId);

    return NextResponse.json({ task });
  } catch (error) {
    console.error("Error updating task:", error);
    return NextResponse.json({ error: "Failed to update task" }, { status: 500 });
  }
}

// DELETE task
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Task ID is required" }, { status: 400 });
    }

    const task = await prisma.task.findUnique({ where: { id } });
    
    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    await prisma.task.delete({ where: { id } });

    // Add activity log
    await prisma.activityLog.create({
      data: {
        action: `Task "${task.title}" deleted`,
        user: "Admin",
        projectId: task.projectId,
      },
    });

    // Update project progress
    await updateProjectProgress(task.projectId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting task:", error);
    return NextResponse.json({ error: "Failed to delete task" }, { status: 500 });
  }
}

// Helper function to update project progress based on completed tasks
async function updateProjectProgress(projectId: string) {
  const tasks = await prisma.task.findMany({ where: { projectId } });
  const completedTasks = tasks.filter((t: { status: string }) => t.status === "completed").length;
  const progress = tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;

  await prisma.project.update({
    where: { id: projectId },
    data: { progress },
  });
}
