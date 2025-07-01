"use client";

import { photosList } from "@/data/PhotoList";
import "./globals.css";

const Page = () => {
  return (
    <div className="text-center mx-5 font-bold my-10">
      <h1>Fotos interativas</h1>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-35">
        {photosList.map((item   => (  
          <div> aaaa</div>
        )))}
        </section>
    </div>
  );
};

export default Page;
