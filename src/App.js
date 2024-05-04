import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutPage from "./components/About";
import { FaHandsClapping } from "react-icons/fa6";
import "animate.css";
import Skills from "./components/Skills";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
`;

const App = () => {
  // loading set
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const isConnected = navigator.onLine;
      if (isConnected) {
        clearInterval(interval);
        setLoading(false);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading d-flex justify-content-center align-items-center">
          <ClipLoader
            color={"#0c4d81"}
            css={override}
            size={100}
            border={"6px"}
          />
        </div>
      ) : (
        <div className="container-fluid">
          <Navbar />
          <Home />
          <AboutPage />
          <Skills />
          <Portofolio />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
