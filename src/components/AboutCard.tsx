import Card from "react-bootstrap/Card";

export function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hello! I'm <span className="purple">Mateen Akram</span>, an{" "}
            <span className="purple">AI Engineer</span> and{" "}
            <span className="purple">Full Stack Software Developer</span> with
            hands-on experience building scalable AI-powered web applications,
            automation systems, REST APIs, and real-time communication platforms.
            <br />
            <br />
            I hold a <span className="purple">Bachelor of Science in Computer Science</span> from{" "}
            <span className="purple">FAST-NUCES</span> (CGPA 3.16) and currently work as a{" "}
            <span className="purple">Software Engineer</span> at BitPix Soft, where I develop
            intelligent voice AI and backend systems. I've also delivered AI automation
            solutions at Robx.AI, spanning chatbots, workflow orchestration, and
            business process automation.
            <br />
            <br />
            I love turning <span className="purple">complex challenges</span> into
            production-ready products and enjoy working with{" "}
            <span className="purple">Python, FastAPI, Next.js, React, LLMs, and Docker</span>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
