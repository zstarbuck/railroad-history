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

  // Identify the last array (you said the structure is fixed)
  const lastArray = locomotive_decades[9]; // last group of locomotives
  const isInLastArray = lastArray.includes(locomotive);

  // Conditional rendering based on group location
  if (isInLastArray) {
    // Specialized rendering for the last array
    return (
      <div className="container locomotive special-decade">
        <h2>{locomotive.model} (Concept / Proposed)</h2>
        <div className="locomotive-container">
          {locomotive.imgLink ? (
            <img
              src={locomotive.imgLink}
              alt={locomotive.model}
              className="limited-width"
            />
          ) : (
            <p>No image available for this conceptual locomotive.</p>
          )}
          <div className="locomotive-details">
            <p>
              <strong>description:</strong> {locomotive.description || "N/A"}
            </p>

            {/* Add or omit details depending on your needs */}
          </div>
        </div>
      </div>
    );
  } else {
    // Existing rendering for all other locomotives (no structural change)
    return (
      <div className="container locomotive">
        <h2>{locomotive.model}</h2>
        <div className="locomotive-container">
          {locomotive.imgLink && (
            <img
              src={locomotive.imgLink}
              alt={locomotive.model}
              className="limited-width"
            />
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
                <h3>Related Links:</h3>
                <ul>
                  {locomotive.sites.map((url, idx) => (
                    <li key={idx}>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        Check out website link {idx + 1}
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
}

// import { useParams } from "react-router-dom";
// import { locomotive_decades } from "../locomotives-object";

// export default function Locomotive() {
//   const { locomotiveID } = useParams();
//   const allLocomotives = locomotive_decades.flat();
//   const id = decodeURIComponent(locomotiveID);

//   const locomotive = allLocomotives.find(
//     (loco) => loco.model.toLowerCase() === id.toLowerCase()
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
//             <div>
//               <h3>Related Videos:</h3>
//               <ul>
//                 {locomotive.links.map((url, idx) => (
//                   <li key={idx}>
//                     <a href={url} target="_blank" rel="noopener noreferrer">
//                       Watch YouTube video {idx + 1}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//               <h3>Related Links:</h3>
//               <ul>
//                 {locomotive.sites.map((url, idx) => (
//                   <li key={idx}>
//                     <a href={url} target="_blank" rel="noopener noreferrer">
//                       Check out website link {idx + 1}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
