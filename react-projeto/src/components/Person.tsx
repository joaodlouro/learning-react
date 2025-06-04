const getWeekday = (today: Date) => {
  return new Intl.DateTimeFormat('en', { weekday: 'long' }).format((today)); // dia da semana 
};

export const Person = () => {
  const name: string = 'cat';
  const avatar: string = 'https://i.pinimg.com/736x/e2/ae/91/e2ae91720c347f89d2315edd9ba98ea6.jpg';
  const today: Date = new Date ();

  return (
    <> 
      <h1 style={{color: 'pink', fontSize: '50px'}}>{name} - {getWeekday(today)}</h1> 
      <img 
        src={avatar}
        alt={name}
        className="w-100 h-100"
      />
      
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>

    </> //serve como um elemento, mas não e um elemento "uma tag transparente "  fragment  //sempre FEHCAR TODAS AS TAGS
  );
};
