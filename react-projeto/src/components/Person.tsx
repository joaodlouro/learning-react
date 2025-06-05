//serve como um elemento, mas não e um elemento "uma tag transparente "  fragment  //sempre FEHCAR TODAS AS TAGS

const getWeekday = (today: Date) => {
  return new Intl.DateTimeFormat('en', { weekday: 'long' }).format(today); // dia da semana 
};

type Props = {
  name: string;
  avatar: string;
  role: string[];
  address?: string;
};

export const Person = (props: Props) => {
  const today: Date = new Date();

  return (
    <> 
      <h1> {props.name}  - {getWeekday(today)} </h1> 
      <img 
        src={props.avatar}
        alt={props.name}
        className="w-100 h-100"
      />
      
      <ul>
        <li>{props.role[0]}</li>
        <li>{props.role[1]}</li>
      </ul>
    </>
  );
};
