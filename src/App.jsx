import { Routes, Route } from "react-router-dom";

import 'bootstrap-icons/font/bootstrap-icons.css';

// NEW PAGE
import Project from "./pages/Project";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";



function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<Project />} />
              <Route path="/resume" element={<Resume />} />

            </Routes>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
