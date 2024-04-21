import { Col, Container, Row } from "react-bootstrap";

import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import profile from "./../assets/image/profil-foto.jpg";
import "animate.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <Container>
        <Row lg={6} md={6} xs={12}>
          <Col lg={6} md={6} xs={12}>
            <div
              className=" d-flex col-md-12 my-5 home-section order-lg-0 
            order-md-1 order-xs-1"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div>
                <h6>
                  Hy There,{" "}
                  <span className="hands animate__animated animate__bounce">
                    <FaHandsClapping />
                  </span>
                </h6>
                <h2> I'm Sajid Sabilla</h2>
                <h5>
                  <span>Junior Web Developer</span>
                </h5>

                <p className="home-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                  rerum similique! Id iure tempore, possimus fugiat placeat amet
                  magni debitis similique reiciendis, facere, ab rerum? Unde
                  pariatur quis sint saepe.
                </p>

                <button className="btn btn-primary">Contact Me</button>
                <div className="icon-sosmed d-flex gap-4 my-2">
                  <a href="">
                    <AiOutlineGithub />
                  </a>
                  <a href="">
                    <FaLinkedin />
                  </a>
                  <a href="">
                    <FaInstagram />
                  </a>
                  <a href="">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} md={6} xs={12}>
            <div
              className="d-flex order-lg-1 md-mt-5  order-md-0 order-xs-0 col-md-12 
          d-flex justify-content-center align-items-center"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img
                className="shadow rounded-circle image-fluid profile"
                src={profile}
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
