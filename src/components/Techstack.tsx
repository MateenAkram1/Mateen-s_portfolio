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
    <Row className="skillset-row">
      {/* Markup & Styling */}
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">HTML5</span>
        <SiHtml5 title="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">CSS3</span>
        <SiCss3 title="CSS3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Sass</span>
        <SiSass title="Sass" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Tailwind CSS</span>
        <SiTailwindcss title="Tailwind CSS" />
      </Col>

      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">JavaScript</span>
        <SiJavascript title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">TypeScript</span>
        <SiTypescript title="TypeScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">PHP</span>
        <SiPhp title="PHP" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Python</span>
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">C# and ASP.NET</span>
        <DiNetmagazine title="C# and ASP.NET" />
      </Col>

      {/* Front-end Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">React</span>
        <SiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Next.js</span>
        <SiNextdotjs title="Next.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Redux</span>
        <SiRedux title="Redux" />
      </Col>

      {/* Back-end & DevOps */}
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Node.js</span>
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Docker</span>
        <SiDocker title="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">AWS</span>
        <SiAmazonwebservices title="AWS" />
      </Col>

      {/* Version Control & Package Management */}
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Git</span>
        <SiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">npm</span>
        <SiNpm title="npm" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Yarn</span>
        <SiYarn title="Yarn" />
      </Col>

      {/* Build Tooling */}
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Webpack</span>
        <SiWebpack title="Webpack" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Babel</span>
        <SiBabel title="Babel" />
      </Col>

      {/* Testing */}
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Jest</span>
        <SiJest title="Jest" />
      </Col>

      {/* Databases & Caching */}
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">PostgreSQL</span>
        <SiPostgresql title="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">MongoDB</span>
        <SiMongodb title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Redis</span>
        <SiRedis title="Redis" />
      </Col>
    </Row>
  );
}
