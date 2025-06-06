//referecia importação, usando igual tag html e possi chamar por outro nome na importação ex> "quadrado ao inves de Square/ não faz diferança para o codigo" =(somente export default). import Square, {Circle} from '@/components/Geo' , dá para importa dos dois jeitos, não necessariamnte somente de um.

//import {Square, Circle} from '@/components/circle'       

import { GeoForm } from "@/components/GeoForm";
import { Person } from "@/components/Person";
import { Card } from "@/components/Card";
import { Circle } from "@/components/Circle";

const Page = () => {
  return (
    <div>
    <h1 className="font-bold  text-2xl"> Olá mundo  </h1>
    <h3> Algum outro texto </h3>


      <>
      <h3 className="text-3xl font-bold italic"> "efeito"</h3>
      <p className="text-right text-sm">autor</p>
     <Circle/>
      </>
     <Card phrase="alguma" author="isso ai"  />
    </div>
  );
}

export default Page;
