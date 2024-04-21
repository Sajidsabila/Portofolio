import { Container, Nav, Navbar } from "react-bootstrap";
const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className=" bg-primary sticky-top">
        <Container>
          <Navbar.Brand className="ms-4 text-white fw-bold" href="#home">
            My Portofolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-white  link px-3">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-white  link px-3">
                About
              </Nav.Link>
              <Nav.Link href="#skills" className="text-white  link px-3">
                Skills
              </Nav.Link>
              <Nav.Link href="#portofolio" className="text-white  link px-3">
                Portofolio
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white  link px-3">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
