import { NavLink } from "react-router-dom";
import RecipeRating from "./RecipeRating";

export function RecipeCard({ data }) {
  return (
    <div className="card">
      <NavLink to={`${data.idMeal}`}>
        <div>
          <img
            src={data.strMealThumb}
            alt={data.strMeal}
            title={data.strMeal}
          />
        </div>
        <h2>{data.strMeal}</h2>
      </NavLink>
      <RecipeRating />
    </div>
  );
}
