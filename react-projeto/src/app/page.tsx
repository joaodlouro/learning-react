
import {peopleList} from '@/data/peopleList';

const Page =  () => {

//const list = peopleList.map(person => <li>{person.name}</li>)  //parametro, list com varios <li>


return (
  <div>
    <h1 className="font-bold text-2xl">Olá mundo </h1>
    <h3>algo texto</h3>

    {peopleList.length >0 &&
    <ul>
       {peopleList.map (person => 
      <li key= {person.id}>{person.name}- {person.profession}</li> //quando usar map, user  key= {person.id} (sempre o id), identificador unico para x iten
      )}
    </ul>
}
  </div>
);
}

export default Page;