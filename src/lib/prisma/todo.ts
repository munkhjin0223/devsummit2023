import { Todo } from '@/types';
import prisma from '.';

export async function getTodos() {
  try {
    const todos = await prisma.todos.findMany();

    return { todos };
  } catch (error: any) {
    console.error(error.message);
    return { error, todos: [] as Todo[] };
  }
}

export async function createTodo(todo: Todo) {
  try {
    const todoFromDB = await prisma.todos.create({ data: todo });

    return { todo: todoFromDB };
  } catch (error) {
    return { error };
  }
}

export async function deleteTodo(id: string) {
  try {
    const todoFromDB = await prisma.todos.delete({ where: { id } });

    return { todo: todoFromDB };
  } catch (error) {
    return { error };
  }
}

export async function getTodoById(id: string) {
  try {
    const todoFromDB = await prisma.todos.findUnique({ where: { id } });

    return { todo: todoFromDB };
  } catch (error) {
    return { error };
  }
}
