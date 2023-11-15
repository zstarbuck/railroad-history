import { useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Header from "./Header";
import Recipes from "./Recipes";
import Recipe from "./Recipe";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/beef" replace={true} />} />
        <Route path=":category" element={<Recipes />} />
        <Route path=":category/:recipeID" element={<Recipe />} />
      </Routes>
    </>
  );
}
