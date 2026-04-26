import React from "react";
import { Link } from "react-router-dom";

import qr from "../assets/img/qr_ticket.png";
import agritrade from "../assets/img/agritrade.png";
import nou from "../assets/img/NOU.png";
import techbazaar from "../assets/img/TechBazaar.png";
import useSEO from "../hooks/useSEO";

/* PROJECT LIST DATA */
const projects = [
    {
        id: "Qr-Ticket-Application",
        git: "https://github.com/vdubey92928/qr-ticket-application",
        title: "QR Ticket & Secure Entry Validation System (Rastriya Prerna Sthal)",
        desc:
            "The QR Ticket & Secure Entry Validation System is a full-stack application developed to automate and secure event access control. The platform enables users to generate tickets without authentication, embedding each ticket with a uniquely encoded QR payload. Gate operators authenticate separately and validate entries in real time using a dedicated scanning interface. The backend, implemented using Spring Boot and Spring Security, enforces strict role-based access control and ensures transactional consistency to prevent duplicate or unauthorized entries. RESTful APIs manage ticket generation and validation workflows with optimized response handling. MySQL is structured with relational constraints to maintain ticket state integrity. The application follows a layered architecture separating controller, service, and repository layers, ensuring scalability, maintainability, and secure concurrent processing.",
        tech: "Spring Boot • Spring Security •  React.js • MySQL • Bootstrap",
        features: [
            "QR-based ticket generation with unique encoded identifiers",
            "Role-based authentication for Admin and Gate operators",
            "Real-time ticket validation via REST APIs",
            "Transactional prevention of duplicate or unauthorized entry"
        ],
        img: qr
    },
    {
        id: "LMS",
        git: "https://github.com/vdubey92928/nouapp",
        title: "LMS – NOU e-Gyan Portal (Academic Workflow Management System)",
        desc:
            "The NOU e-Gyan Portal is a Spring Boot MVC-based Learning Management System designed to digitize academic operations for institutional use. The platform supports Admin, Faculty, and Student roles with clearly defined authorization boundaries and secure session management. Administrators manage courses and user records, faculty upload structured academic resources, and students access controlled learning content. Backend services are implemented using Spring Data JPA with a normalized MySQL schema to ensure efficient data retrieval and consistency. Thymeleaf provides dynamic server-side rendering, reducing frontend complexity while maintaining responsiveness. The application emphasizes modular service-layer logic, secure authentication workflows, and maintainable backend architecture suitable for scalable academic deployments.",
        tech: "Spring Boot • Thymeleaf • MySQL • Bootstrap",
        features: [
            "Multi-role academic access management",
            "Course creation and content distribution system",
            "Secure authentication and session-based authorization",
            "MVC-based layered backend architecture"
        ],
        img: nou
    },
    {
        id: "AgriTradeHub",
        git: "https://github.com/vdubey92928/AgriTradeHub",
        title: "AgriTradeHub – Direct Farmer-to-Buyer Trading Platform",
        desc:
            "AgriTradeHub is a backend-oriented trading platform developed to connect farmers directly with buyers, promoting transparent agricultural commerce. Farmers can publish product listings with pricing and stock information, while buyers browse products and initiate purchase transactions. The backend is built using Spring Boot with business logic encapsulated in the service layer to ensure validation, transactional integrity, and consistent order lifecycle handling. MySQL is used with a structured relational schema to manage users, products, and transaction records efficiently. Backend validations prevent inconsistent order states and enforce business constraints. The frontend prioritizes simplicity and usability, ensuring accessibility for rural and non-technical users. The project demonstrates structured backend design and domain-focused system modeling.",
        tech: "Spring Boot • Thymeleaf • MySQL • Bootstrap",
        features: [
            "Farmer product listing and inventory management",
            "Buyer browsing and order placement workflow",
            "Backend-enforced transactional integrity",
            "Relational schema optimized for trade management"
        ],
        img: agritrade
    },
    {
        id: "TechBazar",
        git: "https://github.com/vdubey92928/TechBazaar",
        title: "TechBazar – Multi-Vendor E-Commerce Platform",
        desc:
            "TechBazar is a multi-vendor e-commerce platform developed using Spring Boot following the MVC architectural pattern. The system supports Admin, Seller, and Buyer roles with secure role-based authentication implemented using Spring Security. Sellers manage product listings and inventory, buyers handle cart and order workflows, and administrators oversee overall platform operations. Backend services are structured using Spring Data JPA with a normalized MySQL relational schema to manage products, users, and transactions efficiently. The application implements order lifecycle state management and secure session handling to ensure consistent transactional processing. Thymeleaf enables dynamic server-side rendering while Bootstrap ensures responsive UI design. The project demonstrates enterprise-style backend architecture and structured multi-role system implementation.",
        tech: "Spring Boot • Thymeleaf • MySQL • Bootstrap",
        features: [
            "Multi-role system (Admin, Seller, Buyer)",
            "Spring Security-based authentication and authorization",
            "Order lifecycle management and relational schema design",
            "Responsive server-side rendered interface"
        ],
        img: techbazaar
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
