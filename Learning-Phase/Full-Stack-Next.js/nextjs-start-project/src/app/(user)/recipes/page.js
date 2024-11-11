import Card from "@/components/Card";
import React from "react";

export const metadata = {
  title: "Recipes",
};

export const revalidate = 10

const Recipes = async () => {
  let response = await fetch("https://dummyjson.com/recipes", {
    cache : "no-cache",
  });

  if (!response.ok) {
    throw new Error("Bhaii API nhi chal rahi!")
  }

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
