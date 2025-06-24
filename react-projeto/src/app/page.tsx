"use client"

import { useState } from 'react';
import React from 'react';
import "./globals.css";

const Page = () => {
  const [showSecret, setShowSecret] = useState(false);

  const handleClickButton = () => {
    setShowSecret(!showSecret);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <button
        onClick={handleClickButton}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Mostrar/Ocultar
      </button>

      {showSecret &&
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
          aquiiii
        </div>
      }
    </div>
  );
}

export default Page;