import React from 'react'
import qr from "../assets/img/qr_ticket.png";
import agritrade from "../assets/img/agritrade.png";
import nou from "../assets/img/NOU.png";
import { Link } from 'react-router-dom';

const projects = [
    {
        id: "Qr-Ticket-Application",
        img: qr,
        title: "QR Ticket & Entry Validation System",
        desc:
            "QR-based ticketing system with real-time entry validation and role-based access control.",
        tech: "Spring Boot • React.js • MySQL • Bootstrap"
    },
    {
        id: "LMS",
        img: nou,
        title: "LMS – NOU e-Gyan Portal",
        desc:
            "Learning Management System with role-based authentication and course management.",
        tech: "Spring Boot • Thymeleaf • MySQL • Bootstrap"
    },
    {
        id: "AgriTradeHub",
        img: agritrade,
        title: "AgriTradeHub",
        desc:
            "Farmer-to-buyer marketplace platform with backend-driven order processing.",
        tech: "Spring Boot •Thymeleaf • MySQL  • Bootstrap"
    }
];

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="scroll-section">
            <div className="row py-5">
                <div className="col-sm-10 mx-auto text-center">

                    <h1 className="fw-bold title">Featured Projects</h1>
                    <p className="text-muted fs-5 mt-2 mb-5">
                        Selected projects showcasing my full-stack development skills.
                    </p>

                    <div className="row g-4">
                        {projects.map((project) => (
                            <div key={project.id} className="col-md-4">

                                <div className="card portfolio-card theme-card h-100">

                                    <div className="portfolio-img-wrapper">
                                        <img
                                            src={project.img}
                                            className="card-img-top "
                                            alt={project.title}
                                        />
                                    </div>

                                    <div className="card-body d-flex flex-column text-center">
                                        <h5 className="fw-bold project-title">{project.title}</h5>

                                        <p className="text-muted small mt-2">
                                            {project.desc}
                                        </p>

                                        <span className="portfolio-tech mt-auto">
                                            {project.tech}
                                        </span>

                                        <Link
                                            to={`/project/${project.id}`}
                                            className="btn btn-outline-theme mx-auto btn-sm mt-3 w-50"
                                        >
                                            View More
                                        </Link>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PortfolioSection;
