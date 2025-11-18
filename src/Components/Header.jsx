import { Link, useNavigate } from "react-router-dom";

const decades = [
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

export default function Header() {
  const navigate = useNavigate();

  const handleClick = (event) => {
    const decade = event.target.value;
    console.log("decadeLink: ", event.target.value);
    navigate(`/${decade}`); //change category route  to /decade route
  };

  return (
    <>
      <div id="loco-img">
        <Link to={`/`} className="title">
          <h1>Passenger Rail Locomotives of North America</h1>
        </Link>
      </div>
      <nav>
        {decades.map((decade) => (
          <Link id="decades-container" key={decade} to={`/${decade}`}>
            {decade}
          </Link>
        ))}
      </nav>
    </>
  );
}
