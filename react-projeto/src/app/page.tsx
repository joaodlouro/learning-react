"use client";
import { useState } from "react";
import { Person } from "@/types/Person";
import "./globals.css";
//doideira Perdrinho123 lima lol
const Page = () => {
  const [fullName, setFullName] = useState<Person>({
    name: "Boni",
    lastName: "Lima",
  });

  const handleClearButton = () => {
    setFullName({ ...fullName, name: "pedrinho123" });
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input
        type="text"
        placeholder="Sobrenome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.lastName}
        onChange={(e) =>
          setFullName({ ...fullName, lastName: e.target.value })
        }
      />

      <p>Nome aqui:</p>
      <p>
        {fullName.name} {fullName.lastName}
      </p>

      <button
        onClick={handleClearButton}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      > Limpar nome aqui </button>


    </div>
  );
};

export default Page;
