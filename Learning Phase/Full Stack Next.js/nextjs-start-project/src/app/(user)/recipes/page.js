import Card from "@/components/Card";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Recipes",
};

const Recipes = async () => {
  let response = await fetch("https://dummyjson.com/recipes");
  let data = await response.json();
  return (
    <div className="flex items-center justify-center flex-wrap gap-4 p-12 w-full h-screen">
      {data.recipes && data.recipes.map((recipe) => {
        return <Card key={recipe.id} recipe={recipe} />
      })}
    </div>
  );
};

export default Recipes;
