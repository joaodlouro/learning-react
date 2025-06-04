 //referecia importação, usando igual tag html e possi chamar por outro nome na importação ex> "quadrado ao inves de Square/ não faz diferança para o codigo" =(somente export default). import Square, {Circle} from '@/components/Geo' , dá para importa dos dois jeitos, não necessariamnte somente de um.

 //import {Square, Circle} from '@/components/circle'       // dessa forma dá para exportar mais de um!!!! 


import { GeoForm } from "@/components/GeoForm";

const Page =() =>{
  return(
    <div>
    <h1 className="font-bold  text-lg">Olá mundo</h1>
    <h2>oiiii</h2>

   <GeoForm /> 

    </div>
    
  );}
 
 

  export default Page;