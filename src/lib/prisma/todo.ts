import { Prisma, Todo } from '@prisma/client';
import prisma from '.';

export async function getTodos() {
  try {
    const todos = await prisma.todo.findMany();

    return { todos };
  } catch (error: any) {
    console.error(error.message);
    return { error, todos: [] as Todo[] };
  }
}

export async function createTodo(todo: Prisma.TodoCreateInput) {
  try {
    const todoFromDB = await prisma.todo.create({ data: todo });

    return { todo: todoFromDB };
  } catch (error) {
    return { error };
  }
}

export async function updateTodo(id: string, todo: Prisma.TodoUpdateInput) {
  try {
    const todoFromDB = await prisma.todo.update({ where: { id }, data: todo });

    return { todo: todoFromDB };
  } catch (error) {
    return { error };
  }
}

export async function deleteTodo(id: string) {
  try {
    const todoFromDB = await prisma.todo.delete({ where: { id } });

    return { todo: todoFromDB };
  } catch (error) {
    return { error };
  }
}

export async function getTodoById(id: string) {
  try {
    const todoFromDB = await prisma.todo.findUnique({ where: { id } });

    return { todo: todoFromDB };
  } catch (error) {
    return { error };
  }
}
