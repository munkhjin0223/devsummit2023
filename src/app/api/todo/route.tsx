import { getTodos } from '@/lib/prisma/todo';
import { NextResponse } from 'next/server';

export async function GET() {
  const todos = await getTodos();

  return NextResponse.json({ todos });
}
