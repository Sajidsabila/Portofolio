import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardLink,
} from "react-bootstrap";
import portofolio1 from "./../assets/image/porto1.png";
import portofolio2 from "./../assets/image/porto2.png";
import portofolio3 from "./../assets/image/porto 3.png";
import portofolio4 from "./../assets/image/porto 4.png";

const Portofolio = () => {
  return (
    <section id="portofolio" className="container">
      <Container>
        <Row>
          <div className="fs-2 fw-bold text-center my-5">
            My <span className="about-me">Portofolio</span>
          </div>
          <Row lg={4} md={6} xs={12} className="my-3">
            <Col lg={4} md={6} xs={12} className="my-3">
              <Card>
                <CardImg
                  src={portofolio1}
                  variant="top"
                  alt="porto"
                  className="image-fluid gap-3  rounded-2 d-flex justify-content-center"
                ></CardImg>
                <CardBody>
                  <Card.Title>
                    <h5 className="ms-2">Web Cinema</h5>
                  </Card.Title>
                  <Card.Text>
                    <p className="ms-2 text-start">
                      Wesbite ini dibuat dengan Bootstrap dan react js dengan
                      mengambil data dari imdb movie
                    </p>
                  </Card.Text>
                  <div className="d-flex flex-row ms-2">
                    <Card.Link
                      href="#"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Bootstrap
                    </Card.Link>
                    <Card.Link
                      href="#"
                      className="btn btn-outline-primary btn-sm"
                    >
                      React Js
                    </Card.Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4} md={6} xs={12} className="my-3">
              <Card>
                <CardImg
                  src={portofolio2}
                  variant="top"
                  alt="porto"
                  className="image-fluid gap-3  rounded-2 d-flex justify-content-center"
                ></CardImg>
                <CardBody>
                  <Card.Title>
                    <h5 className="ms-2">Web Peminjaman Barang</h5>
                  </Card.Title>
                  <Card.Text>
                    <p className="ms-2 text-start">
                      Wesbite ini dibuat dengan Bootstrap , mysql dan php dengan
                      mengambil data dari imdb movie
                    </p>
                  </Card.Text>
                  <div className="d-flex flex-row ms-2">
                    <Card.Link
                      href="#"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Bootstrap
                    </Card.Link>
                    <Card.Link
                      href="#"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Mysql
                    </Card.Link>
                    <Card.Link
                      href="#"
                      className="btn btn-outline-primary btn-sm"
                    >
                      PHP
                    </Card.Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4} md={6} xs={12} className="my-3">
              <Card>
                <CardImg
                  src={portofolio3}
                  variant="top"
                  alt="porto"
                  className="image-fluid gap-3  rounded-2 d-flex justify-content-center"
                ></CardImg>
                <CardBody>
                  <Card.Title>
                    <h5 className="ms-2">Company profile 3Minus Beads</h5>
                  </Card.Title>
                  <Card.Text>
                    <p className="ms-2 text-start">
                      Wesbite ini dibuat dengan HTML , Bootstrap dan Javascript
                      dengan mengambil data dari imdb movie
                    </p>
                  </Card.Text>
                  <div className="d-flex flex-row ms-2">
                    <Card.Link
                      href="#"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Bootstrap
                    </Card.Link>
                    <Card.Link
                      href="#"
                      className="btn btn-outline-primary btn-sm"
                    >
                      HTML
                    </Card.Link>
                    <Card.Link
                      href="#"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Javascript
                    </Card.Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4} md={6} xs={12} className="my-3">
              <Card>
                <CardImg
                  src={portofolio4}
                  variant="top"
                  alt="porto"
                  className="image-fluid gap-3  rounded-2 d-flex justify-content-center"
                ></CardImg>
                <CardBody>
                  <Card.Title>
                    <h5 className="ms-2">Library Msib</h5>
                  </Card.Title>
                  <Card.Text>
                    <p className="ms-2 text-start">
                      Wesbite ini dibuat dengan Bootstrap , HTML , jquery dan
                      ajax dengan mengambil data dari API
                    </p>
                  </Card.Text>
                  <div className="d-flex flex-row ms-2">
                    <Card.Link
                      href="#"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Bootstrap
                    </Card.Link>
                    <Card.Link
                      href="#"
                      className="btn btn-outline-primary btn-sm"
                    >
                      HTML
                    </Card.Link>
                    <Card.Link
                      href="#"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Jquery
                    </Card.Link>
                    <Card.Link
                      href="#"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Ajax
                    </Card.Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};
export default Portofolio;
