import { Col, Row } from "react-bootstrap";
import { DiVisualstudio } from "react-icons/di";
import { SiGithub, SiJira, SiPostman, SiSlack } from "react-icons/si";

export function Toolstack() {
  return (
    <Row className="skillset-row">
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Jira</span>
        <SiJira title="Jira" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Visual Studio</span>
        <DiVisualstudio title="Visual Studio" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Postman</span>
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Slack</span>
        <SiSlack title="Slack" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">GitHub</span>
        <SiGithub title="GitHub" />
      </Col>
    </Row>
  );
}
