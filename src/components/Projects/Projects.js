import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import textutil from "../../Assets/Projects/textutils.png";
import trippy from "../../Assets/Projects/trippy.png";
import newshub from "../../Assets/Projects/newshub.png";

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
              imgPath={trippy}
              isBlog={false}
              title="Trippy"
              
              description={
                <>
                  Trippy is an innovative and responsive tours and travel website that aims to provide users with a seamless and immersive experience in planning their dream trips.
                  <br />
                  Tech-Stack -Html,Css,Javscript,ReactJs.
                </>
              }
              ghLink="https://github.com/Piyush8172/Trippy"
              demoLink="https://csb-mllzv3-9haofa1n1-piyush8172.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newshub}
              isBlog={false}
              title="NewsHub"
              description={

              <>NewsHub is a news app which that can be used to grab quick daily news bites. If you are interested in technology , science, health, business and sports then newshub is for you.
              <br/>Tech-Stack - ReactJS, NewsAPI, HTML, Bootstrap, Css, Javascript</>
              }
              ghLink="https://github.com/Piyush8172/NewsHub"
              demoLink="https://news-pfyw4gan2-piyush8172.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card" >
            <ProjectCard
              imgPath={textutil}
              isBlog={false}
              title="TextUtils"
              description="TextUtils is a text tool for efficient character and word counting, enhanced by a stylish dark mode for a personalized writing experience. Streamline your workflow effortlessl. Tech-Stack - Html, Css, Javascript, ReactJs, Bootstrap."
              ghLink="https://github.com/Piyush8172/textutils"
              demoLink="https://piyush8172.github.io/textutils/"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
