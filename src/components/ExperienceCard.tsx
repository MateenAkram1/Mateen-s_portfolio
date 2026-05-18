import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

const experiences = [
  {
    role: "Software Engineer",
    company: "BitPix Soft",
    location: "Lahore, Pakistan",
    period: "Jul 2025 – Present",
    highlights: [
      "Developed Talkbase, an AI-powered voice calling platform using Next.js, FastAPI, Twilio, and LiveKit for low-latency local and international AI communication.",
      "Designed, developed, and integrated scalable RESTful APIs while following Agile software development methodologies.",
      "Worked on backend architecture, real-time communication systems, API optimization, and AI workflow integration.",
    ],
  },
  {
    role: "AI & Automation Expert",
    company: "Robx.AI",
    location: "Remote",
    period: "May 2025 – Aug 2025",
    highlights: [
      "Built an AI-powered customer support chatbot using OpenAI APIs, n8n, Docker, SMTP automation, and workflow orchestration tools.",
      "Implemented Facebook Marketplace automation pipelines and intelligent process automation workflows for business operations.",
      "Optimized automation processes and integrated AI-based conversational systems for customer engagement.",
    ],
  },
];

export function ExperienceCard() {
  return (
    <Row className="experience-row">
      {experiences.map((exp) => (
        <Col md={6} key={`${exp.company}-${exp.role}`} className="experience-col">
          <Card className="experience-card-view">
            <Card.Body>
              <div className="experience-header">
                <h3 className="experience-role">{exp.role}</h3>
                <span className="experience-period purple">{exp.period}</span>
              </div>
              <p className="experience-company">
                <span className="purple">{exp.company}</span>
                {" · "}
                {exp.location}
              </p>
              <ul className="experience-highlights">
                {exp.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
