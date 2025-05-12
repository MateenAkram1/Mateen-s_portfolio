import Card from "react-bootstrap/Card";

export function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hello! I'm <span className="purple">Jon Haywood</span>, I work as a{" "}
            <span className="purple">software developer</span> and I am based in
            beautiful <span className="purple">Colorado</span> 🏔️.
            <br />
            <br />
            My BS is in <span className="purple">Computer Science</span> and I
            have over <span className="purple">15 years</span> of experience
            building web applications for healthcare, oil and natural gas,
            publishing and technology companies.
            <br />
            <br />I love turning{" "}
            <span className="purple">complex challenges</span> into simple,
            user-friendly tools and enjoy experimenting with new tech like{" "}
            <span className="purple">generative AI</span>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
