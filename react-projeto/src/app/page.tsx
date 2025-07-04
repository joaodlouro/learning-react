"use client"

import { questions } from "@/data/questions";
import { useState } from "react";



const Page = () => {


const [currentQuestion, setCurrentQuestion] = useState(0);
  const title = 'Quiz';

  return (


<div className="w-full h-screen flex justify-center bg-blue-600  items-center">
  <div className="w-full max-w-xl rounded-md bg-white text-black  shadow-black">
   <div className="p-5 font-bold shadow border-b border-gray-400">{title}</div>
   <div className="p-5">
    aaaa
    </div>
    <div className="p-5 text-center border-t border-gray-400">
      {currentQuestion + 1} de pergunts {questions.length} pergunta {questions.length !== 1 ? 's' : ''}
      </div>
    

  </div>

     
    </div>
  )


}


 export default Page;