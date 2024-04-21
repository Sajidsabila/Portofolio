import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="Container">
      <Container>
        <Row>
          <div className="fs-2 fw-bold text-center my-5">
            My<span className="about-me"> Contact</span>
          </div>
        </Row>
        <Row
          lg={8}
          xs={12}
          md={8}
          className="d-flex flex-column align-items-center mx-4"
        >
          <Col lg={8} xs={11} md={8}>
            <div className="card my-4">
              <div className="card-header fs-4 text-white bg-primary py-2">
                Contact Us
              </div>
              <div className="card-body">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name....." />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Number Phone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your Number Phone....."
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Kirim
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
