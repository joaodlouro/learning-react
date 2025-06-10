import {peopleList} from '@/data/peopleList';

const Page =  () => {

  const chemists = peopleList.filter(person => person.profession === 'chemist');  //filtro

  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo</h1>
      <h3>algo texto</h3>

      {chemists.length > 0 && 
        <>
          <h3>Lista de químicos</h3>
          <ul>
            {chemists.map(person =>
              <li key={person.id}>{person.name}</li>
            )}
          </ul>
        </>
      }
    </div>
  );
}

export default Page;
