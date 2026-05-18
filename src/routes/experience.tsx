import { ExperienceCard } from "@/components/ExperienceCard";
import { Particle } from "@/components/Particle";
import { createFileRoute } from "@tanstack/react-router";
import { Container } from "react-bootstrap";

export const Route = createFileRoute("/experience")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Work <strong className="purple">Experience</strong>
        </h1>
        <p className="white-text experience-intro">
          Professional roles where I have built AI-powered platforms, scalable
          APIs, and automation systems.
        </p>
        <ExperienceCard />
      </Container>
    </Container>
  );
}
