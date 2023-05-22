'use client';

import { Todo } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  todo: Todo;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string, completed: boolean) => void;
};

export default function Item({ todo, deleteTodo, toggleTodo }: Props) {
  const router = useRouter();

  const [completed, setCompleted] = useState(todo.completed);

  function onClickCompleted() {
    setCompleted(!completed);

    toggleTodo(todo.id, !completed);
  }

  function onClickDelete() {
    deleteTodo(todo.id);

    router.refresh();
  }

  return (
    <li key={todo.id} className={`flex justify-between p-3${completed ? ' text-underline' : ''}`}>
      <div>
        <input id={todo.id} type="checkbox" checked={completed} onChange={() => onClickCompleted()} />
        <label className="pl-2 text-2xl text-uppercase">{todo.text}</label>
      </div>
      <button
        className="group rounded-2xl h-8 w-36 bg-red-500 font-bold text-md text-white relative overflow-hidden"
        onClick={() => onClickDelete()}
      >
        Delete
      </button>
    </li>
  );
}
