"use client";

import { useState } from "react";
import "./globals.css";

const Page = () => {
  const [list, setList] = useState([]);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center text-2xl w-full">
        <h1 className="text-4xl mt-5">Lista de tarefas</h1>
        <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-100 border border-gray-300">
          <input
            type="text"
            placeholder="O que deseja fazer?"
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Adicionar aqui
          </button>
        </div>

        <ul className="w-full max-w-lg list-disc pl-5">
          <li className="text-gray-700">Tarefa 1</li>
          <li className="text-gray-700">Tarefa 2</li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
