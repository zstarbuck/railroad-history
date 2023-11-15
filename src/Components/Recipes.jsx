import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipeCard } from "./RecipeCard";

export default function Recipes() {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => response.json())
      .then(data => setRecipes(data.meals))
      .catch(error => console.error("Error:", error))
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <div className="container grid">
      {isLoading
        ? "Loading..."
        : recipes.map(recipe => (
            <RecipeCard data={recipe} key={recipe.idMeal} />
          ))}
    </div>
  );
}
