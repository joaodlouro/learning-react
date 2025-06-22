"use client"
import { useState } from 'react';
import "./globals.css";

const Page = () => {
  const [showSecret, setShowSecret] = useState(false);

  const handleClickButton = () => {
    setShowSecret(!showSecret);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <button
        onClick={handleClickButton}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Mostrar
      </button>

      {showSecret && (
        <div className="p-3 bg-blue-300 rounded-md mt-3">
          parte secreta
        </div>
      )}
    </div>
  );
}

export default Page;
