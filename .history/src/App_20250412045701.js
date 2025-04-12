
import './App.css';


import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./s/About";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    toast.success("👋 Welcome to my portfolio!", {
      position: "top-right",
      theme: "dark",
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
