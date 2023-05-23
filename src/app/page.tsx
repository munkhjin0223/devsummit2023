import { ClientComponent, ServerComponent } from '@/components/ComponentWrappers';
import { TodoForm, TodoList } from '@/components/todo';
import { getTodos } from '@/lib/prisma/todo';

export default async function Home() {
  const { todos } = await getTodos();

  return (
    <div className="max-w-4xl mx-auto mt-10 h-screen">
      <h1 className="my-2 mb-10 text-5xl text-center">Todo</h1>
      <div>
        <TodoForm />
        <div className="h-4"></div>
        <TodoList todos={todos} />
        <div className="h-2"></div>
      </div>
    </div>
  );
}
