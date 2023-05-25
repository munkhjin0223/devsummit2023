import { createTodo } from '@/lib/mongo/todos';
import { getTodos } from '@/lib/prisma/todo';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const todos = await getTodos();

  return NextResponse.json({ todos });
}

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    const { insertedId, error } = await createTodo(text);
    if (error) throw new Error(error);

    return NextResponse.json({ insertedId }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
