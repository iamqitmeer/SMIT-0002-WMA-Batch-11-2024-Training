// "use client";

import { notFound } from "next/navigation";
import React from "react";

async function RecipesDetails({ params }) {
  // let par = await params
  console.log(params.id);

  let response = await fetch(`https://dummyjson.com/recipes/${params.id}`);
  let data = await response.json();

  if (data.message) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Phir API Nhi Chal raho");
  }

  return (
    <div className="w-full h-screen p-12 flex flex-col items-center">
      <div>
        <img
          src={data.image}
          alt={data.name}
          className="rounded-lg w-full h-[300px] object-cover mb-4"
        />

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {data.name}
        </h2>
        <p className="text-gray-500 text-sm mb-2">
          {data.cuisine} | {data.mealType}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <p>Prep Time: {data.prepTimeMinutes} mins</p>
          <p>Servings: {data.servings}</p>
          <p>Difficulty: {data.difficulty}</p>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Ingredients:
        </h3>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          {data.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Instructions:
        </h3>
        <ol className="list-decimal pl-5 text-gray-700 mb-4 space-y-2">
          {data.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        <div className="flex items-center justify-between mt-4">
          <div className="text-yellow-500 font-semibold">
            ⭐ {data.rating}{" "}
            <span className="text-gray-500">({data.reviewCount} reviews)</span>
          </div>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition">
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipesDetails;
