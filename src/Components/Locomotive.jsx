import { useParams } from "react-router-dom";
import { locomotive_decades } from "../locomotives-object";

export default function Locomotive() {
  const { locomotiveID } = useParams();
  const allLocomotives = locomotive_decades.flat();
  const id = decodeURIComponent(locomotiveID);

  const locomotive = allLocomotives.find(
    (loco) => loco.model.toLowerCase() === id.toLowerCase()
  );

  if (!locomotive) {
    return <div>Locomotive not found</div>;
  }

  return (
    <div className="container locomotive">
      <h2>{locomotive.model}</h2>
      <div className="locomotive-container">
        {locomotive.imgLink && (
          <img src={locomotive.imgLink} alt={locomotive.model} />
        )}
        <div className="locomotive-details">
          <p>
            <strong>Year:</strong> {locomotive.year}
          </p>
          <p>
            <strong>Maker:</strong> {locomotive.maker}
          </p>
          <p>
            <strong>Service:</strong> {locomotive.service}
          </p>
          <p>
            <strong>Origins:</strong> {locomotive.origins}
          </p>
          <p>
            <strong>Service Life:</strong> {locomotive.serviceLife}
          </p>
          <p>
            <strong>Transition Era:</strong> {locomotive.transitionEra}
          </p>
          <p>
            <strong>What's Next:</strong> {locomotive.whatsNext}
          </p>
          <p>
            <strong>By The Numbers:</strong> {locomotive.byTheNumbers}
          </p>
          {locomotive.links && locomotive.links.length > 0 && (
            <div>
              <h3>Related Videos:</h3>
              <ul>
                {locomotive.links.map((url, idx) => (
                  <li key={idx}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      Watch YouTube video {idx + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// import { useParams } from "react-router-dom";
// // Import or define locomotive_decades

// export default function Locomotive() {
//   const { locomotiveID } = useParams();

//   // Flatten the array to search all locomotives
//   const allLocomotives = locomotive_decades.flat();

//   // Find locomotive by unique identifier (e.g., model)
//   const locomotive = allLocomotives.find(
//     (loco) => loco.model.toLowerCase() === locomotiveID.toLowerCase()
//   );

//   if (!locomotive) {
//     return <div>Locomotive not found</div>;
//   }

//   return (
//     <div className="container locomotive">
//       <h2>{locomotive.model}</h2>
//       <div className="locomotive-container">
//         {locomotive.imgLink && (
//           <img src={locomotive.imgLink} alt={locomotive.model} />
//         )}
//         <div className="locomotive-details">
//           <p>
//             <strong>Year:</strong> {locomotive.year}
//           </p>
//           <p>
//             <strong>Maker:</strong> {locomotive.maker}
//           </p>
//           <p>
//             <strong>Service:</strong> {locomotive.service}
//           </p>
//           <p>
//             <strong>Origins:</strong> {locomotive.origins}
//           </p>
//           <p>
//             <strong>Service Life:</strong> {locomotive.serviceLife}
//           </p>
//           <p>
//             <strong>Transition Era:</strong> {locomotive.transitionEra}
//           </p>
//           <p>
//             <strong>What's Next:</strong> {locomotive.whatsNext}
//           </p>
//           <p>
//             <strong>By The Numbers:</strong> {locomotive.byTheNumbers}
//           </p>
//           {locomotive.links && locomotive.links.length > 0 && (
//             <a
//               href={locomotive.links}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Watch YouTube video!
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
