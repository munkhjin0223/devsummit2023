import { createTodo } from "@/lib/prisma/todos";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    const { todo, error } = await createTodo({ id: Math.random().toString(), text });
    if (error) throw error;

    return NextResponse.json({ todo }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
