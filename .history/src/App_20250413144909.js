import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills"
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    toast.success("👋 Welcome to my portfolio!", {
      position: "top-center",
      theme: "dark",
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-content">
        <ToastContainer />
        <Home />
        <About />
        <Education />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
