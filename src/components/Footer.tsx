import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <div className="footer-text">
            Designed and Developed by Jon Haywood
          </div>
        </Col>
        <Col md="4" className="footer-copywright">
          <div className="footer-text">Copyright © {year}</div>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/JonHaywood"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/jonathanhaywood/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:jonathan.haywood@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="Email"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
