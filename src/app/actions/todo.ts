'use server';

import { createTodo, deleteTodo, updateTodo } from '@/lib/prisma/todo';

export const addTodo = async (text: string) => {
  await createTodo({ id: Math.random().toString(), text });
};

export const toggleTodo = async (id: string, completed: boolean) => {
  await updateTodo(id, { completed });
};

export const removeTodo = async (id: string) => {
  await deleteTodo(id);
};
