export default function Home({ title }) {
  return (
    <div className="container">
      <h2>{title}</h2>
      <p>
        The purpose of this website is to provide a clear and organized history
        of the locomotives that have powered commuter rail services across the
        United States and Canada. By using a dropdown menu organized by decade,
        visitors can easily explore the evolution of rolling stock from the
        1970s through today. Each section highlights key locomotives, their
        builders, years of production, and the railroads that operated them,
        making it a resource for both rail enthusiasts and people interested in
        how transit technology has changed over time.
      </p>
      <p>
        This site also aims to connect technical details with the bigger story
        of commuter rail’s growth in North America. By showcasing locomotives
        decade by decade, users can see how designs shifted to meet new
        demands—whether for efficiency, environmental performance, or passenger
        capacity. The goal is to make this history accessible, visually
        engaging, and informative, offering a central place where anyone can
        learn about the machines that have shaped daily travel for millions of
        riders.
      </p>
    </div>
  );
}
