import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/1.png";
import emotion from "../../Assets/Projects/2.png";
import editor from "../../Assets/Projects/3.png";
import chatify from "../../Assets/Projects/4.png";
import suicide from "../../Assets/Projects/5.png";
import bitsOfCode from "../../Assets/Projects/6.png";

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
            imgPath={leaf}
            isBlog={false}
            title="Menu Plus"
            description="Menu Plus is a QR menu application designed for restaurants. It allows restaurant owners and managers to easily create, edit, and update their menus. Customers can access the menu by scanning a QR code and place their orders directly. Menu Plus facilitates the digital transformation of restaurants and enhances operational efficiency."
            demoLink="https://menuplus.com.tr/"
          />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Blogged"
              description="Blogged is a web application where users can share personal blog posts and stories. It features user management, post creation/editing, commenting, liking posts/comments, image uploading, and search functionality. Built with React, Redux Toolkit, Formik, and Material-UI, it utilizes a dummy JSON API for data management."
              ghLink="https://github.com/0memo07/Blogged"
              demoLink="https://0memo07.github.io/Blogged/"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={editor}
            isBlog={false}
            title="MeMo Burger"
            description="MeMo Burger is an order management app designed for restaurants. The app provides a seamless user experience with features such as real-time order preview, ingredient price calculation and order fulfillment. Built with React, Redux and Material-UI, the app offers an intuitive and visually appealing interface for both customers and restaurant staff."
            ghLink="https://github.com/0MeMo07/MeMo-Burger"
            demoLink="https://0memo07.github.io/MeMo-Burger/"
          />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={chatify}
            isBlog={false}
            title="e-commerce website"
            description="A comprehensive e-commerce web application built with React, utilizing dummyjson APIs for product data. Users can browse products, view details, add to cart, and checkout. Features include search, authentication, order tracking, and a user-friendly interface with Redux state management."
            ghLink="https://github.com/0MeMo07/React-Shopping-Web-Application"
            demoLink="https://0memo07.github.io/React-Shopping-Web-Application/"
          />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={suicide}
            isBlog={false}
            title="Photo Search"
            description="Photo Search is a React application that uses Unsplash APIs to allow users to search and discover high-quality images. With its clean interface and intuitive search functionality, users can easily find the photos they want based on keywords. it includes a seamless browsing experience as more results are dynamically loaded."
            ghLink="https://github.com/0MeMo07/Photo-Search"
            demoLink="https://0memo07.github.io/Photo-Search/"
          />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={bitsOfCode}
            isBlog={false}
            title="Todo App"
            description="Todo App is a simple yet functional task management application built with React. It uses a JSON server as a pseudo backend to store and retrieve task data. Users can easily create, update and delete tasks. The app has a clean and intuitive user interface, making it easy to navigate tasks and manage tasks efficiently. "
            ghLink="https://github.com/0MeMo07/react-task-app"
            demoLink="https://0memo07.github.io/react-task-app/"
          />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;