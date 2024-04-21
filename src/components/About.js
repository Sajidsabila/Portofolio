import { Container, Row } from "react-bootstrap";

const AboutPage = () => {
  return (
    <section className="py-5" id="about">
      <Container>
        <Row data-aos="fade-up" data-aos-duration="1500">
          <p className="text-center"></p>
          <p className="fs-3 fw-bold text-center bg-teritary mb-3">
            About <span className="about-me">Me</span>
          </p>
          <p className="text-center text-about my-5">
            Perkenalkan nama saya Muh Esa Susilo Sajid Sabilla saya Mahasiswa
            Teknik Informatika Universitas Semarang saya memiliki minat untuk
            belajar didunia Teknologi Informasi selain saya belajar web
            developer saya juga mempelajari Graphic Design saya jug amengikuti
            pelatihan dan juga sertifikasi untuk mengasah kemampuan saya di
            bidang teknologi Informasi dan Graphic Design.
          </p>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
