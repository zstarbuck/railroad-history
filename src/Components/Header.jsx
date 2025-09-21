import { Link, useNavigate } from "react-router-dom";

const decades = [1960, 1970, 1980, 1990, 2000, 2010, 2020, 0];

export default function Header() {
  const navigate = useNavigate();

  const handleClick = (event) => {
    const decade = event.target.value;
    console.log("decadeLink: ", event.target.value);
    navigate(`/${decade}`); //change category route  to /decade route
  };

  return (
    <div>
      <div id="loco-img">
        <Link to={`/`} className="title">
          <h1>Locomotives of North America</h1>
        </Link>
      </div>
      <nav>
        {decades.map((decade) => (
          <Link id="decades-container" key={decade} to={`/${decade}`}>
            {decade}
          </Link>
        ))}
      </nav>
    </div>
  );
}
