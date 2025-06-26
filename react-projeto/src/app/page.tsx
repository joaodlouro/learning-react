"use client"

import { TodoItem } from '@/types/TodoItem';
import { useState } from 'react';

const Page = () => {
  const [list, setList] = useState<TodoItem[]>([]);

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-gray">
        <input 
          type="text" 
          className="flex-1 p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          placeholder="Digite uma tarefa"
        />
        <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Adicionar
        </button>
      </div>

      <ul className="w-full max-w-lg list-disc pl-5">
        <li>
          Tarefa - 
          <button className="ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            [Remover]
          </button>
        </li>
        <li>
          Tarefa - 
          <button className="ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            [Remover]
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Page;
