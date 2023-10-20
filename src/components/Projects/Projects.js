import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Learn-Go"
              description="An online learning website using php language and cms system."
              ghLink="https://github.com/rammmpr/learngo-website"
              demoLink="https://github.com/rammmpr/learngo-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Laravel Live Chat Like Whatsapp"
              description="Website to chat people directly like whatsaap using laravel livewire."
              ghLink="https://github.com/rammmpr/laravel-chat"
              demoLink="https://github.com/rammmpr/laravel-chat"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Rubik Games"
              description="Website For Playing Rubik Games."
              ghLink="https://github.com/rammmpr/rubik"
              demoLink="https://github.com/rammmpr/rubik"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
