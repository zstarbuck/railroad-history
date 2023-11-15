import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>My Favorite Recipes</h1>
      <nav>
        {categories.map((category) => (
          <NavLink to={`/${category.strCategory.toLowerCase()}`} key={category.idCategory}>
            {category.strCategory}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}