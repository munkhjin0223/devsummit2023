import { ClientComponent, ServerComponent } from '@/components/ComponentWrappers';
import TodoForm from '@/components/todo/Form';
import TodoList from '@/components/todo/List';
import { getTodos, createTodo, deleteTodo, updateTodo } from '@/lib/prisma/todo';

export default async function Home() {
  const { todos } = await getTodos();

  const addTodo = async (text: string) => {
    'use server';
    await createTodo({ id: Math.random().toString(), text });
  };

  const toggleTodo = async (id: string, completed: boolean) => {
    'use server';
    await updateTodo(id, { completed });
  };

  const removeTodo = async (id: string) => {
    'use server';
    await deleteTodo(id);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 h-screen">
      <ServerComponent>
        <h1 className="my-2 mb-10 text-5xl text-center">Todo</h1>
        <div>
          <ClientComponent>
            <TodoForm addTodo={addTodo} />
          </ClientComponent>
          <div className="h-4"></div>
          <ClientComponent>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={removeTodo} />
          </ClientComponent>
          <div className="h-2"></div>
        </div>
      </ServerComponent>
      <div className="flex mt-10 align-right">
        <ServerComponent>Server Component</ServerComponent>
        <ClientComponent>Client Component</ClientComponent>
      </div>
    </div>
  );
}
