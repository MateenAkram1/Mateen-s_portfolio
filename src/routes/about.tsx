import { AboutCard } from "@/components/AboutCard";
import { Particle } from "@/components/Particle";
import { createFileRoute } from "@tanstack/react-router";
import { Col, Container, Row } from "react-bootstrap";
import laptopImg from "@/assets/about.webp";
import { Techstack } from "@/components/Techstack";
import { Toolstack } from "@/components/Toolstack";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="centered-row">
          <Col md={7} className="about-col">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who <strong className="purple">I Am</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col md={5} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}
