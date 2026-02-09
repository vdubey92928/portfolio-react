import React from 'react'
import usePageTitle from "../hooks/usePageTitle";


import Contact from '../components/Contact'

import hero from "../assets/img/vivekanand.png";
import qr from "../assets/img/qr_ticket.png";
import agritrade from "../assets/img/agritrade.png";
import nou from "../assets/img/NOU.png";
import { Link } from 'react-router-dom';

const steps = [
    {
        title: "Research",
        icon: "fa-magnifying-glass",
        desc:
            "I start by understanding the problem, user requirements, and business goals. This phase includes requirement analysis, feasibility checks, and defining clear system boundaries."
    },
    {
        title: "Design",
        icon: "fa-pen-ruler",
        desc:
            "I design clean, responsive UI layouts and system architecture. This includes wireframes, database schema planning, and deciding the right tech stack."
    },
    {
        title: "Develop",
        icon: "fa-code",
        desc:
            "I implement features using clean, maintainable code. Frontend is built with React, Bootstrap, and HTML, while backend logic is handled using Java and Spring Boot."
    },
    {
        title: "Deploy",
        icon: "fa-rocket",
        desc:
            "After testing and optimization, I deploy the application and ensure everything runs smoothly. I also focus on performance, security, and scalability."
    }
];

const projects = [
    {
        id: "Qr-Ticket-Application",
        title: "QR Ticket & Entry Validation System",
        desc:
            "QR-based ticketing system with real-time entry validation and role-based access control.",
        tech: "Spring Boot • Thymeleaf • MySQL • Bootstrap",
        img: qr
    },
    {
        id: "LMS",
        title: "LMS – NOU e-Gyan Portal",
        desc:
            "Learning Management System using Spring Boot MVC with role-based authentication.",
        tech: "Spring Boot • Thymeleaf • MySQL",
        img: nou
    },
    {
        id: "AgriTradeHub",
        title: "AgriTradeHub – Farmer to Buyer Platform",
        desc:
            "Platform connecting farmers directly with buyers for seamless product trading.",
        tech: "Spring Boot • MySQL • HTML • Bootstrap",
        img: agritrade
    }
];

const Home = () => {
    usePageTitle("Java Backend Developer | Vivekanand Dubey");
    return (
        <>
            <div className="container-fluid p-0 px-4">

                <section id="home" className="scroll-section">
                    <div className="row mb-5 pt-5" id="home">
                        <div className="col-sm-10 mx-auto">
                            <div className="row align-items-center">

                                <div className="col-sm-6 text-responsive">
                                    <h1 className="my-2 title">
                                        Hi! I’m Vivekanand Dubey
                                    </h1>

                                    <p className="my-3 fs-5 ">
                                        A <strong>Java Full-Stack Developer</strong> specializing in
                                        <strong> Spring Boot</strong> on the backend and
                                        <strong> React</strong>, <strong>Bootstrap</strong>, and
                                        <strong> HTML</strong> for building responsive, modern user interfaces.
                                    </p>

                                    <p className="text-muted">
                                        I build complete web applications — designing clean, mobile-friendly
                                        frontend pages and powering them with secure, scalable backend
                                        systems using Java, REST principles, and relational databases.
                                    </p>

                                    <div className='text-center'>
                                        <button className="bg-voilet p-3 rounded-2 border-0 my-3 ">
                                            Let’s Build Something
                                        </button>
                                    </div>
                                </div>

                                <div className="col-sm-5 mx-auto">
                                    <div className="rounded-circle bg-lightpink overflow-hidden">
                                        <img
                                            src={hero}
                                            className="img-fluid w-100  object-fit-cover"
                                            alt="Vivekanand Dubey"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="scroll-section text-justify">
                    <div className="row bg-lightgray rounded-4 py-5 my-5">
                        <div className="col-sm-10 mx-auto py-5">
                            <div className="row py-5 align-items-center text-center">
                                <div className="col-10 col-sm-8 mx-auto">

                                    <h1 className="pt-5 pt-sm-0 title">
                                        I am a Java Full-Stack Developer
                                    </h1>

                                    <p className="pt-3 text-responsive">
                                        I design and build scalable, secure, and user-friendly web applications
                                        using Java, Spring Boot, and modern frontend technologies.
                                        My focus is on writing clean backend logic while delivering responsive
                                        and intuitive user interfaces.
                                    </p>

                                    <p className="pt-1">
                                        On the frontend, I work with React, Bootstrap, and HTML to create
                                        mobile-friendly layouts. On the backend, I specialize in Spring Boot,
                                        role-based authentication, database design, and real-world business logic
                                        implementation.
                                    </p>

                                    {/* BUTTONS */}
                                    <div className="row mt-4">

                                        <div className="col-6 col-sm-4 mt-5 mx-auto">
                                            <button className="bg-voilet p-3 border-0 rounded-2 w-100">
                                                <Link className='text-decoration-none text-white' to="/resume">My Resume</Link>

                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="process" className="scroll-section">
                    <div className="row py-5 bg-light" id="process">
                        <div className="col-sm-10 mx-auto">

                            {/* SECTION HEADER */}
                            <div className="row mb-5">
                                <div className="col-md-6 text-center">
                                    <h1 className="fw-bold title ">My Work Process</h1>
                                    <p className="text-muted fs-5">
                                        A structured and practical approach that helps me deliver
                                        scalable, reliable, and user-friendly web applications.
                                    </p>
                                </div>
                            </div>

                            {/* PROCESS CARDS */}
                            <div className="row g-4">
                                {steps.map((step, i) => (
                                    <div key={i} className="col-sm-6 col-lg-3">
                                        <div className="card h-100 process-card border-0">

                                            <div className="font-icon text-center mt-4">
                                                <i className={`fa-solid ${step.icon} p-3`}></i>
                                            </div>

                                            <div className="card-body text-center">
                                                <span className="text-muted fw-semibold">
                                                    Step {i + 1}
                                                </span>
                                                <h4 className="mt-2 fw-bold">{step.title}</h4>
                                                <p className="text-secondary  mt-3  text-responsive">
                                                    {step.desc}
                                                </p>
                                            </div>

                                        </div>
                                    </div>

                                ))}
                            </div>

                        </div>
                    </div>
                </section>

                <section id="portfolio" className="scroll-section">
                    <div className="row py-5 portfolio-section" id="portfolio">
                        <div className="col-sm-10 mx-auto text-center">

                            <h1 className="fw-bold title">Portfolio</h1>
                            <p className="text-muted fs-5 mt-2 mb-5">
                                Selected projects showcasing my full-stack development skills.
                            </p>

                            <div className="row g-4">
                                {projects.map((project) => (
                                    <div key={project.id} className="col-md-4">
                                        <div className="card portfolio-card h-100">

                                            <div className="portfolio-img-wrapper">
                                                <img
                                                    src={project.img}
                                                    className="card-img-top"
                                                    alt={project.title}
                                                />
                                            </div>

                                            <div className="card-body d-flex flex-column text-center">
                                                <h5 className="fw-bold">{project.title}</h5>

                                                <p className="text-secondary small mt-2">
                                                    {project.desc}
                                                </p>

                                                <span className="portfolio-tech mt-auto">
                                                    {project.tech}
                                                </span>

                                                <Link
                                                    to={`/project/${project.id}`}
                                                    className="btn btn-outline-primary mx-auto btn-sm mt-3 w-50"
                                                >
                                                    View More
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="btn btn-primary mt-5 px-5 py-2 rounded-pill">
                                View More Projects
                            </button>
                        </div>
                    </div>
                </section>

                <section id="cta" className="scroll-section">
                    <div className="row py-2 text-white text-center bg-dark">
                        <div className="col-sm-12 mx-auto py-5 my-5">
                            <h1>Do you have a Project Idea?</h1>
                            <h1 className="mb-4">Let’s discuss your project.</h1>
                            <p>
                                I'm always open to discussing new projects and creative ideas.
                                Let's connect and build something amazing together.
                            </p>
                            <a href="#" className="btn btn-primary  w-50 rounded-pill mt-5">
                                Let's Work Together
                            </a>
                        </div>
                    </div>
                </section>

                <section id="contact" className="scroll-section">
                    <Contact />
                </section>

            </div>
        </>
    )
}

export default Home
