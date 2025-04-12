
import './App.css';


import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    toast.success("👋 Welcome to my portfolio!", {
      position: "top-center", // Closest default to center
      theme: "dark",
      className: "custom-toast-center", // custom class
      bodyClassName: "custom-toast-body",
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <ToastContainer />
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
