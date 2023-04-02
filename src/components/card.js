const Card = ({numberStep, description}) => {
  return (

<div className="rounded-lg w-[60px] sm:w-[120px] h-18 pt-1">
    <div className="flex flex-col items-center">
        <div className="flex justify-center w-8 h-8 text-center border-2 border-blue-500 rounded-full shadow-lg bg-gray-50">
        <p className="pt-[2px] align-middle text-blue-600">{numberStep}</p>
        </div>
        <p className="mb-1 text-xs font-medium text-blue-600">{description}</p>
    </div>
</div>

  );
};
export default Card;
