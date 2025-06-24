import Card from "react-bootstrap/Card";

export function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hello! I'm <span className="purple">Mateen Akram</span>, I am a{" "}
            <span className="purple">software developer</span> and I have expertise in{" "}
            <span className="purple">Ai/Ml, App , Web and Game Development.</span> .
            <br />
            <br />
            I am pursuing my <span className="purple">Baschelors of Computer Science</span> degree at <span className="purple">Fast Nuces</span>. I am starting my 7th Semester. Over the past few years, I
            worked on <span className="purple">numerous</span> projects, including
            <span className="purple"> web applications, mobile apps, and games</span>. Currently I am working on a{" "}
            <span className="purple">Artificial Intelligence</span> and Machine learning projects.
            <br />
            <br />I love turning{" "}
            <span className="purple">complex challenges</span> into simple,
            user-friendly tools and enjoy experimenting with new tech like{" "}
            <span className="purple">LLMS, AI models etc</span>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
