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
                    "Software Developer",
                    "Full Stack Engineer",
                    "AI Enthusiast",
                    "App Developer",
                    "Game Developer",
                    "Full Stack Web Developer",
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
                I am a Final Year <b className="purple">Computer Sciences</b> student at Fast{" "}
                <b className="purple">Fast NUCES</b>, and I love learning new
                things, <b className="purple">solving hard problems</b> and
                building <i>awesome software</i>.
                <br />
                <br />
                I’m an <b className="purple">expert</b> in{" "}
                <i>
                  <b className="purple">Python</b>,{" "}
                  <b className="purple">JavaScript</b>,{" "}
                  <b className="purple">C#</b> ,{" "}
                  <b className="purple">C++ , Dart, React</b> and many more programming Languages
                </i>
                .
                <br />
                <br />I enjoy crafting{" "}
                <i>
                  <b className="purple">Ai based applications</b>
                </i>{" "}
                and exploring how <b className="purple">Softwares integrated with AI</b> can
                make everyday tasks more efficient.
                <br />
                <br />
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
