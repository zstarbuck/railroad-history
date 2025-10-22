import { LocomotiveCard } from "./LocomotiveCard";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { locomotive_decades, explanation } from "../locomotives-object";

const decadesList = [
  "1940s",
  "1950s",
  "1960s",
  "1970s",
  "1980s",
  "1990s",
  "2000s",
  "2010s",
  "2020s",
  "Proposed",
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
          <h2 className="overview">{decade} Overview</h2>
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
