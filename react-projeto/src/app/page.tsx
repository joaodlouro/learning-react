import Square from '@/components/Square' //referecia importação, usando igual tag html e possi chamar por outro nome na importação ex> "quadrado ao inves de Square/ não faz diferança para o codigo" =(somente export default)

const Page =() =>{
  return(
    <div>
    <h1 className="font-bold  text-lg">Olá mundo</h1>
    <h2>oiiii</h2>

    <Square />   
    </div>
  );}
 
 

  export default Page;