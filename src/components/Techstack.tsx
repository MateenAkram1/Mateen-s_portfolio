import { Col, Row } from "react-bootstrap";
import { DiNodejs, DiPython, DiNetmagazine } from "react-icons/di";
import {
  SiRedis,
  SiNextdotjs,
  SiPostgresql,
  SiAmazonwebservices,
  SiMongodb,
  SiJest,
  SiBabel,
  SiWebpack,
  SiYarn,
  SiNpm,
  SiGit,
  SiDocker,
  SiRedux,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSass,
  SiCss3,
  SiHtml5,
  SiPhp,
} from "react-icons/si";

export function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Markup & Styling */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 title="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 title="CSS3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSass title="Sass" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss title="Tailwind CSS" />
      </Col>

      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript title="TypeScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp title="PHP" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNetmagazine title="C# and ASP.NET" />
      </Col>

      {/* Front-end Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <SiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs title="Next.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux title="Redux" />
      </Col>

      {/* Back-end & DevOps */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonwebservices title="AWS" />
      </Col>

      {/* Version Control & Package Management */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm title="npm" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiYarn title="Yarn" />
      </Col>

      {/* Build Tooling */}
      <Col xs={4} md={2} className="tech-icons">
        <SiWebpack title="Webpack" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBabel title="Babel" />
      </Col>

      {/* Testing */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJest title="Jest" />
      </Col>

      {/* Databases & Caching */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis title="Redis" />
      </Col>
    </Row>
  );
}
