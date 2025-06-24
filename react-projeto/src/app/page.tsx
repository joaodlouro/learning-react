"use client"

 import { useState } from "react";
 import "./globals.css";

 const Page = () => {
  const [count, setCount] = useState(0);

  const handleBtnClick = () => {
    setCount(count + 2);
  };


  return (
  <div className="w-screen h-screen flex flex-col items-center justify-center text-3xl">
    <p>{count}</p>

    <button
      onClick={handleBtnClick}
      className="bg-blue-500 text-white px-10 py-2 rounded-md hover:bg-blue-600 transition-colors mt-4"
    >
      Click me
    </button>
  </div>
)}

export default Page;
