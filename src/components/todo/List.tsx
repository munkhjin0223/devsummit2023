'use client';

import { Todo } from '@/types';
import { useRouter } from 'next/navigation';
import React from 'react';
import Item from './Item';

type Props = {
  todos: Todo[];
  deleteTodo: (id: string) => void;
};

const List = ({ todos, deleteTodo }: Props) => {
  const router = useRouter();

  const onClickDelete = (id: string) => {
    deleteTodo(id);

    router.refresh();
  };

  return (
    <ul className="mt-6">
      {todos.map(todo => (
        <Item key={todo.id} todo={todo} onClickDelete={onClickDelete}></Item>
      ))}
    </ul>
  );
};

export default List;
