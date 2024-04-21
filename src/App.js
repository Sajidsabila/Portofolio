import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutPage from "./components/About";
import { FaHandsClapping } from "react-icons/fa6";
import 'animate.css';
import Skills from "./components/Skills";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutPage/>
      <Skills />
      <Portofolio />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
