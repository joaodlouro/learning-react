import { Phetsarath } from "next/font/google"; //condicional ternaria 

type Props = {
  phrase: string;
  author?: string;
};

export const Card = ({ phrase, author }: Props) => {
  
    return (
      <div className="w-96 border-2 border-red p-3 text-3xl text-center italic">
        <h3 className="text-3xl font-bold italic">"{phrase}"</h3>

        <p className="text-right text-sm">-{author ? author : 'autor'}</p>
      </div>
    );
  }