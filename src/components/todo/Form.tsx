'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  addTodo: (text: string) => void;
};

const TodoForm = ({ addTodo }: Props) => {
  const router = useRouter();

  const [text, setText] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!text) return;

    addTodo(text);
    setText('');

    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="text-xl color-black"
        placeholder="Add Todo..."
      />
    </form>
  );
};

export default TodoForm;
