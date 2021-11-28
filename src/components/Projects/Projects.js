import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/chop (2).png";
import emotion from "../../Assets/Projects/shop (2).png";
import editor from "../../Assets/Projects/port (2).png";
import chatify from "../../Assets/Projects/Untitl.png";
import suicide from "../../Assets/Projects/Untitled (2).png";
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
        YES. I'VE BEEN AROUND.
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Moviessite"
              description="Movie streaming site, built with react.js, Hooks, Redux and Rest APIs. Users can access trendy movies easily "
              link="https://siemtechmovies.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Classic Shop"
              description=" A front-end e-commerce website design for sports wears and equipment. comprises of different categories and many pages. A simplified website with user friendly UI. Built with HTML, CSS, Bootstrap and Javascript."
              link="https://simeonoge.github.io/classicshop/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Gramenka Cakes"
              description="React landing page for a cake Shop, user friendly interface and great design."
              link="https://gramenkacakes.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="My-Life-Gist"
              description="My personal blog page developed with Wordpress. Supports dark mode and easy to write blogs using markdown."
              link="https://mylifegist.unaux.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Gracie Resturant "
              description="Resturant site developed using HTML, CSS, Bootstrap, Jquery and Javascript."
              link="https://simeonoge.github.io/gracieresturant/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Portfolio Website"
              description="Porfolio website displaying personal info, technologies used include react, material ui, moongoose and react bootstrap"
              link="https://siemtech.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
