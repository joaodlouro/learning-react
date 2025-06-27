"use client"

import { TodoItem } from '@/types/TodoItem';
import { useState } from 'react';

const Page = () => {
  const [itemInput, setItemInput] = useState('');
  const [list, setList] = useState<TodoItem[]>([
    { id: '1', label: 'dever', checked: false },
    { id: '2', label: 'comprar', checked: false }
  ]);

  const handleAddButton = () => {
    if (itemInput.trim() === '') return;
    setList([
      ...list,
      { id: crypto.randomUUID(), label: itemInput, checked: false }
    ]);
    setItemInput('');
  };

  const deleteItem = (index: number) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-gray">
        <input
          type="text"
          className="flex-1 p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          placeholder="Digite uma tarefa"
          value={itemInput}
          onChange={e => setItemInput(e.target.value)}
        />
        <button
          onClick={handleAddButton}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Adicionar
        </button>
      </div>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item, index) => (
          <li key={item.id}>
            {item.label} - 
            <button
              onClick={() => deleteItem(index)}
              className="ml-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
