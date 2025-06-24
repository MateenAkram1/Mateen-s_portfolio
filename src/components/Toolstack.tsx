import { Col, Row } from "react-bootstrap";
import { DiVisualstudio } from "react-icons/di";
import { SiGithub, SiJira, SiPostman, SiAndroidstudio,SiFigma,SiIntellijidea } from "react-icons/si";

export function Toolstack() {
  return (
    <Row className="skillset-row">

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Postman</span>
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Jira</span>
        <SiJira title="Jira" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Visual Studio</span>
        <DiVisualstudio title="Visual Studio" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">IntelliJ IDEA</span>
        <SiIntellijidea title="IntelliJ IDEA" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Android Studio</span>
        <SiAndroidstudio title="Android Studio" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Figma</span>
        <SiFigma title="Figma" />
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">GitHub</span>
        <SiGithub title="GitHub" />
      </Col>
    </Row>
  );
}
