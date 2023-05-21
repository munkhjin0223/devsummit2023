import { ClientComponent, ServerComponent } from '@/components/ComponentWrappers';
import TodoForm from '@/components/todo/Form';
import TodoList from '@/components/todo/List';
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
    <div className="sm:container mx-auto mt-10 h-screen">
      <ServerComponent>
        <h1 className="mt-2 mb-10 text-5xl">Todo</h1>
        <div>
          <ClientComponent>
            <TodoForm addTodo={addTodo} />
          </ClientComponent>
          <ClientComponent>
            <TodoList todos={todos} deleteTodo={removeTodo} />
          </ClientComponent>
        </div>
      </ServerComponent>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
        className=""
      >
        <ServerComponent>Server Component</ServerComponent>
        <ClientComponent>Client Component</ClientComponent>
      </div>
    </div>
  );
}
