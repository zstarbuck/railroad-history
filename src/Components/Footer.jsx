// export default function Footer() {
//   return (
//     <>
//       <a
//         href="https://zachary-starbuck-portfolio.netlify.app/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Zack Starbuck
//       </a>
//       <br></br>
//       <a
//         href="https://www.atltrains.com//"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         ATLTrains
//       </a>
//     </>
//   );
// }

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-section">
          <h4>Websites</h4>
          <ul>
            <li>
              <a
                href="https://zachary-starbuck-portfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Personal Portfolio Website
              </a>
            </li>
            <li>
              <a
                href="https://www.atltrains.com//"
                target="_blank"
                rel="noopener noreferrer"
              >
                ATLTrains
              </a>
            </li>
            <li>
              <a
                href="https://atlsavpassrail-gdot.hub.arcgis.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Atlanta/Savannah Study
              </a>
            </li>
            <li>
              <a
                href="https://atlantaregional.org/what-we-do/transportation-planning/regional-transit-planning-coordination/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Atlanta Regional Commission
              </a>
            </li>
            <li>
              <a
                href="https://www.dot.ga.gov/GDOT/pages/AtlantaCharlotteRail.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Atlanta/Charlotte Study
              </a>
            </li>
          </ul>
        </div>

        {/* Connect with Me */}
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>
              {/*rel="noopener noreferrer" serve as security  feature, while _blank opens a separe tab for the linkedin page*/}
              <a
                href="https://www.linkedin.com/in/zachary-starbuck-74a112113"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/zstarbuck"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:zstarbuckgatech@gmail.com">Email</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Youtube Videos</h4>

          <ul>
            <li>
              <a
                href="https://youtu.be/nik8t6T2ZE4?si=5utBfBgZi0gPvFbv"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amtrak South Expansion
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/dXC_IPcDW_A?si=KsRUc2TGDL-BLO-o"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amtrak Success
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/live/vxtrIMrhIfI?si=IqAgRWPTUiXC1Qrq"
                target="_blank"
                rel="noopener noreferrer"
              >
                Booming New Trains
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/TEB7X3Y-Hy4?si=6wkYWPFKYSBGFdOb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Newport News Hub
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/9IikkGFPsEw?si=EPedhwrL4t2M-71_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ridership NC
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/0DH0Ssurz6s?si=xClBdUaSNfi9gnD-"
                target="_blank"
                rel="noopener noreferrer"
              >
                Moving Amtrak Downtown
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/a9C_rin3KI4?si=MxS45ekLvAqg6bvg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mardi Gras Train
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Articles</h4>

          <ul>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Georgia_Rail_Passenger_Program"
                target="_blank"
                rel="noopener noreferrer"
              >
                Georgia Rail Passenger Program
              </a>
            </li>
            <li>
              <a
                href="https://atlanta.urbanize.city/post/amtrak-rail-hub-site-city-launch-study-pick-location-downtown"
                target="_blank"
                rel="noopener noreferrer"
              >
                New Atlanta Amtrak Hub
              </a>
            </li>
            <li>
              <a
                href="https://groundworkcenter.org/georgia-gets-serious-about-expanding-passenger-rail/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Georgia Passenger Rail
              </a>
            </li>
            <li>
              <a
                href="https://www.dot.ga.gov/GDOT/pages/Rail.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Active GDOT Rail Studies
              </a>
            </li>
            <li>
              <a
                href="https://www.dot.ga.gov/GDOT/pages/StateRailPlan.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                GDOT State Rail Plan
              </a>
            </li>
            <li>
              <a
                href="https://media.amtrak.com/2025/04/north-carolina-and-virginia-stations-remain-the-busiest-in-the-southeast-driven-by-high-demand/"
                target="_blank"
                rel="noopener noreferrer"
              >
                VA and NC PAssenger Rail Growth
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Organizations</h4>

          <ul>
            <li>
              <a
                href="https://www.cnuatl.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CNU ATL
              </a>
            </li>
            <li>
              <a
                href="https://georgiaplanning.org/policy-and-advocacy-committee-work/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GPA
              </a>
            </li>
            <li>
              <a
                href="https://abundanthousingatlanta.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AHA
              </a>
            </li>
            <li>
              <a
                href="https://www.martaarmy.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MARTA Army
              </a>
            </li>
            <li>
              <a
                href="https://psequity.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PSE
              </a>
            </li>
            <li>
              <a
                href="https://www.advanceatlanta.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Advance Atlanta
              </a>
            </li>
            <li>
              <a
                href="https://abettercobb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Better Cobb
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="logo-copyright">
        <div></div>
        <p>© Copyright by Zachary Starbuck 2025</p>
      </div>
    </footer>
  );
}
