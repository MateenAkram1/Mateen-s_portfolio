import { Particle } from "@/components/Particle";
import { ProjectCard } from "@/components/ProjectCard";
import { createFileRoute } from "@tanstack/react-router";
import { Col, Container, Row } from "react-bootstrap";
import AiDoc from "@/assets/projects/Ai_doc.webp";
import words from "@/assets/projects/Words.webp";
import Mnist from "@/assets/projects/MNist.webp";
import sehat from "@/assets/projects/SehatSathi.webp";
import mnistp from "@/assets/projects/mnist_pred.webp";
import undead from "@/assets/projects/undead.webp";
import battle from "@/assets/projects/battle.webp";
import casa from "@/assets/projects/CasaConnect.webp";
import recepie from "@/assets/projects/recepie.webp";


export const Route = createFileRoute("/project")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Project <strong className="purple">Playground</strong>
        </h1>
        <p className="white-text">
          Explore my side projects, small apps and scripts that fuel my passion
          for code.
        </p>
        <Row className="project-row">
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AiDoc}
              title="Ai Doctor"
              description="This is An AI Doctor which analyses user's Images and Audio and provide the details about deseases and their cure."
              ghLink="https://github.com/MateenAkram1/Ai-Doctor-With-Voice-Vision.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={words}
              title="Words Completion Model"
              description="This is an RNN based word completion model that uses a pre-trained model to predict the next word in a sentence. It is built using Python, and it can be used to complete sentences in real-time."
              ghLink="https://github.com/MateenAkram1/Words-Completion-Using-RNN.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mnist}
              title="FGM attack on MNIST"
              description="This project implements a Fast Gradient Method (FGM) attack on the MNIST dataset. It demonstrates how adversarial attacks can be applied to machine learning models, specifically in the context of image classification."
              ghLink="https://github.com/MateenAkram1/Hand-Written-digits-Regcognition-with-MNIST-Model.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mnistp}
              title="MNIST CNN Model"
              description="This project implements a Convolutional Neural Network (CNN) model for classifying handwritten digits from the MNIST dataset. It demonstrates the use of deep learning techniques for image recognition tasks."
              ghLink="https://github.com/MateenAkram1/Hand-Written-digits-Regcognition-with-MNIST-Model.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sehat}
              title="Sehat Sathi"
              description="This is a health care app which helps users to find nearby hospitals and clinics. It also provides information about doctors and their availability."
              ghLink="https://github.com/MateenAkram1/Health-Care-System.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={undead}
              title="Undead"
              description="This is a zombie survival game built using Unity. It features a 3D environment where players can fight against zombies and survive as long as possible."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={battle}
              title="Battle Arena"
              description="This is a Multiplayer FPS game built using Unity. It features a 3D environment where players can connect and fight against each other and survive as long as possible."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recepie}
              title="Recepie App"
              description="This is a React Native based recipe app that allows users to search for recipes, view details, and save their favorite recipes. It provides a user-friendly interface for food enthusiasts."
              ghLink="https://github.com/MateenAkram1/Recipe-App-React-Native.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={casa}
              title="Casa Connect"
              description="CasaConnect is Kotlin-based Real Estate App that allows users to search for properties, view details, and contact agents. It provides a user-friendly interface for property seekers."
              ghLink="https://github.com/MateenAkram1/CasaConnect.git"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
