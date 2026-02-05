import { Routes, Route } from "react-router-dom";

import 'bootstrap-icons/font/bootstrap-icons.css';

// NEW PAGE
import Project from "./pages/Project";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Resume from "./pages/Resume";



function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/resume" element={<Resume />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
