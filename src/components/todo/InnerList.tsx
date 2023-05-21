import { getTodos } from '@/lib/prisma/todo';

export default async function InnerList() {
  const { todos } = await getTodos();

  return (
    <ul>
      {todos.map(l => (
        <li key={l.id}>{l.text}</li>
      ))}
    </ul>
  );
}
