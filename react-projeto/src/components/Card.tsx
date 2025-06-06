
import { ReactNode } from "react"  //sempre lembrar de importar 

type Props = {
  children: ReactNode;
}


export const Card = ({children}: Props) => {

  return (

   <div className="w-96 border-2   text-3xl text-center text-white">

      {children}

    </div>
  )
}









