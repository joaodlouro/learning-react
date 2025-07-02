"use client";

import { photosList } from "@/data/PhotoList";
import "./globals.css";
import { PhotoItem } from "@/components/PhotoItem";
import { useState } from "react";
import { Modal } from "@/components/Modal";


const Page = () => {

  const [showModal, setShowModal] = useState(false);
  const[imageModal, setImageModal] = useState("");

  const openModal = (image: number) => {
    const photo = photosList.find((item) => item.id === image);
    if (photo) {
      setImageModal(photo.url);
      setShowModal(true);
    }

    const closeModal = () => {
      setShowModal(false);
      setImageModal("");
    }

}

  return (
    <div className="text-center mx-5 font-bold my-10">
      <h1>Fotos interativas</h1>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-35">
        {photosList.map((item   => (  
          <PhotoItem
            key={item.id}
            photo={item}
            onClick={()=> { openModal(item.id);}}
            />
        )))}
        </section>
       {showModal && (
        <Modal image={imageModal} ocloseModal={closeModal} />
      }
        
    </div>
  );
};

export default Page;
