import { Link } from "react-router-dom";

export function LocomotiveCard({ data }) {
  return (
    <div className="card">
      <Link to={`/locomotive/${encodeURIComponent(data.model)}`}>
        <div className="image-container">
          {data.imgLink ? (
            <img
              src={data.imgLink}
              alt={data.model}
              title={data.model}
              className="fill-image"
            />
          ) : (
            <div className="placeholder">No Image Available</div>
          )}
        </div>
        <h2>{data.model}</h2>
      </Link>
    </div>
  );
}
