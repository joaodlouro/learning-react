//referecia importação, usando igual tag html e possi chamar por outro nome na importação ex> "quadrado ao inves de Square/ não faz diferança para o codigo" =(somente export default). import Square, {Circle} from '@/components/Geo' , dá para importa dos dois jeitos, não necessariamnte somente de um.

//import {Square, Circle} from '@/components/circle'       // dessa forma dá para exportar mais de um!!!! 

import { GeoForm } from "@/components/GeoForm";
import { Person } from "@/components/Person";

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-lg">Olá mundo</h1>
      <h2>oiiii</h2>

      <GeoForm /> 
  
      <Person 
        name="cat"
        avatar="https://i.pinimg.com/736x/e2/ae/91/e2ae91720c347f89d2315edd9ba98ea6.jpg"
        role={['2. 3 .4 .2 234']}
      />

      <Person 
        name="dog"
        avatar="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525"
        role={['2. 3 .4 .2 234']}
      />
    </div>
  );
}

export default Page;
