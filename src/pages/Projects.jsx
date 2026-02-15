import React from "react";
import { Link } from "react-router-dom";

import qr from "../assets/img/qr_ticket.png";
import agritrade from "../assets/img/agritrade.png";
import nou from "../assets/img/NOU.png";
import useSEO from "../hooks/useSEO";

/* PROJECT LIST DATA */
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

export default function Projects() {

    useSEO({
        title: "Resume | Vivekanand Dubey",
        description: "View the resume of Java Backend Developer Vivekanand Dubey.",
        canonical: "https://www.vivekananddubey.com/resume",
    });

    return (
        <section className="py-5">
            <div className="container text-center">

                <h1 className="fw-bold title">All Projects</h1>
                <p className="text-muted fs-5 mt-2 mb-5">
                    Full collection of my development projects
                </p>

                <div className="row g-4">
                    {projects.map((project) => (
                        <div key={project.id} className="col-md-4">

                            <div className="card portfolio-card theme-card h-100">

                                <div className="portfolio-img-wrapper">
                                    <img
                                        src={project.img}
                                        className="card-img-top"
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
                                        View Project
                                    </Link>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
