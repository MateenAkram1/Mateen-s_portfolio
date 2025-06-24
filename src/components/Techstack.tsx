import { Col, Row } from "react-bootstrap";
import { DiNodejs, DiPython, DiNetmagazine } from "react-icons/di";
import {
  SiPostgresql,
  SiNpm,
  SiGit,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiPhp,
  SiC,
  SiCplusplus,
  SiKotlin,
  SiDart,
  SiSelenium,
  SiUnity,
  SiMysql,
  SiFigma,
  SiFlutter,
  SiAssemblyscript,
  SiTensorflow,
  SiFastapi,
  SiFirebase,
  SiFlask
} from "react-icons/si";

export function Techstack() {
  return (
    <Row className="skillset-row">
      
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Python</span>
        <DiPython title="Python" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">C</span>
        <SiC title="C" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">C++</span>
        <SiCplusplus title="C++" ></SiCplusplus>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Kotlin</span>
        <SiKotlin title="Kotlin" />
        </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">HTML5</span>
        <SiHtml5 title="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">CSS3</span>
        <SiCss3 title="CSS3" />
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
        <span className="tech-label">PHP</span>
        <SiPhp title="PHP" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Dart</span>
        <SiDart title="Dart" /></Col>

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Flutter</span>
        <SiFlutter title="Flutter" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">TensorFlow</span>
        <SiTensorflow title="TensorFlow" />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Flask</span>
        <SiFlask title="Flask" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">FastAPI</span>
        <SiFastapi title="FastAPI" /></Col>

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Selenium</span>
        <SiSelenium title="Selenium" />
      </Col>

      {/* Front-end Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">React</span>
        <SiReact title="React" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">React Native</span>
        <SiReact title="React" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Unity</span>
        <SiUnity title="Unity" /></Col>

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Git</span>
        <SiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">npm</span>
        <SiNpm title="npm" />
      </Col>
     
  
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">AssemblyScript</span>
        <SiAssemblyscript title="AssemblyScript" /></Col>

      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">MySQL</span>
        <SiMysql title="MySQL" /></Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Firebase</span>
        <SiFirebase title="Firebase" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">PostgreSQL</span>
        <SiPostgresql title="PostgreSQL" />
      </Col>
      
    </Row>
  );
}
