import Link from "next/link";
import NewTodoForm from "@/components/todo/NewTodoForm";
import { getAllTodos } from "@/lib/mongo/todos";

export const revalidate = 10;

const Page = async () => {
  const { todos } = await getAllTodos();

  return (
    <>
      <h1 className="text-3xl font-bold mb-10 bg-emerald-100 w-fit px-2 text-emerald-900">ISR — Revalidate</h1>

      <NewTodoForm />

      <h2 className="text-xl font-semibold mt-10 border-b pb-2">Todos</h2>
      <ul className="mt-4 flex flex-col gap-1">
        {todos?.map((todo) => (
          <li key={todo._id}>
            <Link href={`/isr/${todo._id}`}>{todo.text}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Page;
