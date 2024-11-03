import Image from "next/image";

const Card = ({ recipe }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={recipe.image} // Use recipe image from data
          alt={recipe.name}
          width={192} // Tailored width
          height={192} // Tailored height
          className="rounded-lg opacity-90" // Rounded corners and reduced opacity
          style={{ objectFit: "cover" }} // Ensure image covers the area
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{recipe.name}</h2>
      </div>
    </div>
  );
};

export default Card;
