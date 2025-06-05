//serve como um elemento, mas não e um elemento "uma tag transparente "  fragment  //sempre FEHCAR TODAS AS TAGS
type Props = {
  name: string;
  avatar: string;
  role: string[];
  address?: string;
};

export const Person = ({ name, avatar, role }: Props) => {
  return (
    <div className="p-3"> 
      <h1> {name} </h1> 
      <img 
        src={avatar}
        alt={name}
        className="w-100 h-100"
      />
      
      <ul>
        <li>{role[0]}</li>
        <li>{role[1]}</li>
      </ul>
    </div>
  );
};
