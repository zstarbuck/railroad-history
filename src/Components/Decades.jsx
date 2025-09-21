import { LocomotiveCard } from "./LocomotiveCard";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { locomotive_decades, explanation } from "../locomotives-object";

const decadesList = [
  "1960",
  "1970",
  "1980",
  "1990",
  "2000",
  "2010",
  "2020",
  "0",
];

export default function Decades() {
  const { decade } = useParams();
  const navigate = useNavigate();

  // Find the index of the selected decade
  const index = decadesList.indexOf(decade);

  if (index === -1 || !locomotive_decades[index]) {
    // Redirect immediately if invalid decade or no data
    navigate("/404", { replace: true });
    return null; // Nothing to render while redirecting
  }

  const locomotives = locomotive_decades[index];
  const explanationText = explanation[index] || null;

  return (
    <div className="explanation-cards">
      {explanationText && (
        <div className="decade-summary-card">
          <h2>{decade}s Overview</h2>
          <p>{explanationText}</p>
        </div>
      )}
      <div className="container grid">
        {locomotives.map((loco) => (
          <LocomotiveCard data={loco} key={loco.model} />
        ))}
        <Outlet />
      </div>
    </div>
  );
}
