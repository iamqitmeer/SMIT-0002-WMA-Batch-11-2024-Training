import Image from "next/image";

const Card = ({ recipe }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <Image
          src={recipe.image} 
          alt={recipe.name}
          width={192} 
          height={192}
          className="rounded-lg opacity-90" style={{ objectFit: "cover" }}/>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{recipe.name}</h2>
      </div>
    </div>
  );
};

export default Card;
