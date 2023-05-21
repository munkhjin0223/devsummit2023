'use client';

import { Todo } from '@/types';

type Props = {
  todo: Todo;
  onClickDelete: (id: string) => void;
};

export default function Item({ todo, onClickDelete }: Props) {
  return (
    <li key={todo.id} className="flex justify-between pb-4">
      <span className="text-4xl text-uppercase">{todo.text}</span>
      <button
        className="group rounded-2xl h-8 w-36 bg-red-500 font-bold text-sm text-white relative overflow-hidden"
        onClick={() => onClickDelete(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}
