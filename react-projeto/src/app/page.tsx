const Page = () => {
  const fullTime = new Intl.DateTimeFormat("en", {
    timeStyle: "short",
    hour12: false,
  }).format(new Date());

  const hour = new Date().getHours(); 

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-blue-500 to-green-500">
      <div className="text-9xl">{fullTime}</div>
      <div className="text-5xl font-bold">
           {hour >= 0 && hour < 12 && "bom dia"}
             {hour >= 12 && hour < 18 && "bom tarde"}
             {hour >= 18 && hour <= 23 && "bom noite"}
      </div>
    </div>
  );
};

export default Page;
