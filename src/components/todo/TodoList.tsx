'use client';

import { Todo } from '@/types';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  todos: Todo[];
  deleteTodo: (id: string) => void;
};

const TodoList = ({ todos, deleteTodo }: Props) => {
  const router = useRouter();

  const onClickDelete = (id: string) => {
    deleteTodo(id);

    router.refresh();
  };

  return (
    <ul className="mt-6">
      {todos.map(todo => (
        <li key={todo.id} className="flex justify-between pb-4">
          <span className="">{todo.text}</span>
          <button
            className="group rounded-2xl h-8 w-36 bg-red-500 font-bold text-sm text-white relative overflow-hidden"
            onClick={() => onClickDelete(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
