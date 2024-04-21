import { Container, Row, Col } from "react-bootstrap";
import html from "./../assets/image/22-512.webp";
import css from "./../assets/image/CSS.png";
import js from "./../assets/image/js.png";
import php from "./../assets/image/OIP.png";
import mysql from "./../assets/image/mysql.png";
import jquery from "./../assets/image/jquery.png";
import bootstrap from "./../assets/image/bootstrap.png";
import laravel from "./../assets/image/laravel.png";
import react from "./../assets/image/5028.png";
const Skills = () => {
  return (
    <section id="skills" className="container">
      <Row>
        <div className="fs-2 fw-bold text-center my-5">
          My <span className="about-me">Skills</span>
        </div>
        <Row xs={2} md={4} lg={2}>
          <Col xs={6} md={4} lg={2}>
            <div className="skills-card my-3 d-flex justify-content-center align-items-center rounded-50 shadow-lg">
              <img
                src={html}
                alt="html-skills"
                className="skills-image text-right"
              ></img>
            </div>
          </Col>

          <Col xs={6} md={4} lg={2}>
            <div className="skills-card my-3 d-flex justify-content-center align-items-center rounded border shadow-lg">
              <img
                src={css}
                alt="html-skills"
                className="skills-image text-right"
              ></img>
            </div>
          </Col>

          <Col xs={6} md={4} lg={2}>
            <div className="skills-card my-3 d-flex justify-content-center align-items-center rounded border shadow-lg">
              <img
                src={js}
                alt="html-skills"
                className="skills-image text-right"
              ></img>
            </div>
          </Col>

          <Col xs={6} sm={6} md={4} lg={2}>
            <div className="skills-card my-3 d-flex justify-content-center align-items-center rounded border shadow-lg">
              <img
                src={php}
                alt="html-skills"
                className="skills-image text-right"
              ></img>
            </div>
          </Col>

          <Col xs={6} sm={6} md={4} lg={2}>
            <div className="skills-card my-3 d-flex justify-content-center align-items-center rounded border shadow-lg">
              <img
                src={mysql}
                alt="html-skills"
                className="skills-image text-right"
              ></img>
            </div>
          </Col>

          <Col xs={6} sm={6} md={4} lg={2}>
            <div className="skills-card my-3 d-flex justify-content-center align-items-center rounded border shadow-lg">
              <img
                src={jquery}
                alt="html-skills"
                className="skills-image text-right"
              ></img>
            </div>
          </Col>

          <Col xs={6} sm={6} md={4} lg={2}>
            <div className="skills-card my-3 d-flex justify-content-center align-items-center rounded border shadow-lg">
              <img
                src={bootstrap}
                alt="html-skills"
                className="skills-image text-right"
              ></img>
            </div>
          </Col>

          <Col xs={6}sm={6} md={4} lg={2}>
            <div className="skills-card my-3 d-flex justify-content-center align-items-center rounded border shadow-lg">
              <img
                src={react}
                alt="html-skills"
                className="skills-image text-right"
              ></img>
            </div>
          </Col>

          <Col xs={6}sm={6} md={4} lg={2}>
            <div className="skills-card my-3 d-flex justify-content-center align-items-center rounded border shadow-lg">
              <img
                src={laravel}
                alt="html-skills"
                className="skills-image text-right"
              ></img>
            </div>
          </Col>
        </Row>
      </Row>
    </section>
  );
};
export default Skills;
