'use client';

import { Todo } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React from 'react';
import Item from './Item';

type Props = {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string, completed: boolean) => void;
};

const List = ({ todos, deleteTodo, toggleTodo }: Props) => {
  return (
    <ul className="py-2">
      {todos.map(todo => (
        <Item key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></Item>
      ))}
    </ul>
  );
};

export default List;
