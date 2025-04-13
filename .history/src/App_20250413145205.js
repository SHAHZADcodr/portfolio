import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
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
        Element type is invalid: expected a string (for built-in components) or
        a class/function (for composite components) but got: object. You likely
        forgot to export your component from the file it's defined in, or you
        might have mixed up default and named imports. Check the render method
        of `App`. Error: Element type is invalid: expected a string (for
        built-in components) or a class/function (for composite components) but
        got: object. You likely forgot to export your component from the file
        it's defined in, or you might have mixed up default and named imports.
        Check the render method of `App`. at createFiberFromTypeAndProps
        (http://localhost:3000/portfolio/static/js/bundle.js:13315:24) at
        createFiberFromElement
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
