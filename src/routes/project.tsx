import { Particle } from "@/components/Particle";
import { ProjectCard } from "@/components/ProjectCard";
import { createFileRoute } from "@tanstack/react-router";
import { Col, Container, Row } from "react-bootstrap";
import AiDoc from "@/assets/projects/Ai_doc.webp";
import words from "@/assets/projects/Words.webp";
import sehat from "@/assets/projects/SehatSathi.webp";
import casa from "@/assets/projects/CasaConnect.webp";
import logo from "@/assets/logo.webp";
import Mnist from "@/assets/projects/MNist.webp";
import undead from "@/assets/projects/undead.webp";
import talkbase from "@/assets/projects/talkbase.png";
import mobicrash from "@/assets/projects/mobicrash.png";
import stayverse from "@/assets/projects/stayverse.png";
import transcribe from "@/assets/projects/transcribe.png";

export const Route = createFileRoute("/project")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects</strong>
        </h1>
        <p className="white-text">
          AI-powered platforms, full-stack applications, and automation systems
          I have designed and built in production and personal work.
        </p>
        <Row className="project-row">
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={talkbase}
              title="Talkbase"
              description="AI-powered voice communication platform for intelligent AI callers handling local and international calls with minimal latency using LLMs. Built with Next.js, Tailwind CSS, FastAPI, Twilio, and LiveKit."
              ghLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobicrash}
              title="MobiCrash"
              description="AI-based traffic monitoring system using Safe City camera feeds to detect mobile phone usage while driving and automatically generate challans and authority alerts. Built with Python, Next.js, FastAPI, and Twilio."
              ghLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stayverse}
              title="StayVerse"
              description="Airbnb-style hotel booking and management platform with AI-based recommendations, analytics dashboards, authentication, and dynamic booking workflows. Built with React.js, Node.js, Express.js, and MongoDB."
              ghLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transcribe}
              title="Transcribe"
              description="AI-powered desktop application for meeting transcription, minutes generation, speech processing, and workflow automation. Built with React.js, Rust, and Python."
              ghLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AiDoc}
              title="CuraSense"
              description="AI healthcare assistant supporting image and voice-based disease prediction with precaution recommendations and text/audio responses. Built with Python, Gradio, and Grok API."
              ghLink="https://github.com/MateenAkram1/Ai-Doctor-With-Voice-Vision.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={words}
              title="ChatBot Generator"
              description="Customizable AI chatbot generation system capable of building domain-specific conversational assistants from user-provided data. Built with Python, React.js, and Tailwind CSS."
              ghLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={words}
              title="Next Word Prediction"
              description="Deep learning-based next-word prediction model using LSTM neural networks for sequence generation and NLP tasks. Built with Python and TensorFlow."
              ghLink="https://github.com/MateenAkram1/Words-Completion-Using-RNN.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={casa}
              title="CasaConnect"
              description="Real estate Android application with property listings, booking systems, authentication, search functionality, and Firebase realtime database integration. Built with Kotlin and Firebase."
              ghLink="https://github.com/MateenAkram1/CasaConnect.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              title="Professional Portfolio"
              description="Responsive portfolio and resume website with modern UI/UX principles and optimized frontend performance. Built with React.js and Tailwind CSS."
              ghLink="https://github.com/MateenAkram1"
            />
          </Col>
        </Row>

        <h1 className="project-heading project-heading-spaced">
          Earlier <strong className="purple">Projects</strong>
        </h1>
        <p className="white-text">
          Academic and side projects from my learning journey in AI, games, and
          mobile development.
        </p>
        <Row className="project-row">
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mnist}
              title="MNIST CNN Model"
              description="Convolutional Neural Network for classifying handwritten digits from the MNIST dataset, demonstrating deep learning for image recognition."
              ghLink="https://github.com/MateenAkram1/Hand-Written-digits-Regcognition-with-MNIST-Model.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sehat}
              title="Sehat Sathi"
              description="Healthcare app helping users find nearby hospitals and clinics with doctor availability information."
              ghLink="https://github.com/MateenAkram1/Health-Care-System.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={undead}
              title="Undead"
              description="Zombie survival game built with Unity featuring a 3D environment where players fight zombies to survive as long as possible."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
