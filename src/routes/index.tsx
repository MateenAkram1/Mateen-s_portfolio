import { Particle } from "@/components/Particle";
import { createFileRoute } from "@tanstack/react-router";
import { Col, Container, Row } from "react-bootstrap";
import homeLogo from "@/assets/home-main.webp";
import { Type } from "@/components/Type";
import myImg from "@/assets/avatar.webp";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏾
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Mateen Akram</strong>
              </h1>

              <div className="type-wrapper">
                <Type
                  strings={[
                    "AI Engineer",
                    "Full Stack Developer",
                    "Software Engineer",
                    "Backend & API Developer",
                    "ML & LLM Integrations",
                  ]}
                />
              </div>
            </Col>

            <Col md={5} className="home-col">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid home-image"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 className="home-about-heading">
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I'm an <b className="purple">AI Engineer</b> and{" "}
                <b className="purple">Full Stack Software Developer</b> based in
                Lahore, Pakistan, with a Bachelor of Computer Science degree from{" "}
                <b className="purple">FAST-NUCES</b>. I build scalable{" "}
                <b className="purple">AI-powered web apps</b>, automation pipelines,
                REST APIs, and real-time communication platforms.
                <br />
                <br />
                Proficient in{" "}
                <i>
                  <b className="purple">Python</b>,{" "}
                  <b className="purple">FastAPI</b>,{" "}
                  <b className="purple">Next.js</b>,{" "}
                  <b className="purple">React</b>,{" "}
                  <b className="purple">Node.js</b>, and{" "}
                  <b className="purple">TensorFlow</b>
                </i>
                , with strong experience in LLM integrations, Docker, and Agile
                product development.
                <br />
                <br />
                Currently at <b className="purple">BitPix Soft</b>, I work on
                voice AI platforms and backend architecture. I enjoy turning{" "}
                <i>
                  <b className="purple">complex problems</b>
                </i>{" "}
                into reliable, user-focused software.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img
                  src={myImg}
                  className="img-fluid avatar-image"
                  alt="avatar"
                />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/MateenAkram1"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    title="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/mateen-akram-b663b0298"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="mailto:mateen.akram124@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    title="Email"
                  >
                    <AiOutlineMail />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
