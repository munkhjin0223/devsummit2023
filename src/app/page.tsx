import TodoForm from '@/components/todo/TodoForm';
import TodoList from '@/components/todo/TodoList';
import { getTodos, createTodo, deleteTodo } from '@/lib/prisma/todo';

export default async function Home() {
  const { todos } = await getTodos();

  const addTodo = async (text: string) => {
    'use server';
    await createTodo({ id: Math.random().toString(), text });
  };

  const removeTodo = async (id: string) => {
    'use server';
    await deleteTodo(id);
  };

  return (
    <div className="sm:container mx-auto mt-10">
      <h1 className="my-2">Todo</h1>
      <div>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={removeTodo} />
      </div>
    </div>
  );
}
