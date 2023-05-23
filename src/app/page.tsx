import { ClientComponent, ServerComponent } from '@/components/ComponentWrappers';
import TodoForm from '@/components/todo/Form';
import TodoList from '@/components/todo/List';
import { getTodos } from '@/lib/prisma/todo';

export default async function Home() {
  const { todos } = await getTodos();

  return (
    <div className="max-w-4xl mx-auto mt-10 h-screen">
      <ServerComponent>
        <h1 className="my-2 mb-10 text-5xl text-center">Todo</h1>
        <div>
          <ClientComponent>
            <TodoForm />
          </ClientComponent>
          <div className="h-4"></div>
          <ClientComponent>
            <TodoList todos={todos} />
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
