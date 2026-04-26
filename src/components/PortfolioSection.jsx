import React from 'react'
import qr from "../assets/img/qr_ticket.png";
import techbazaar from "../assets/img/TechBazaar.png";
import agritrade from "../assets/img/agritrade.png";
import { Link } from 'react-router-dom';


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
        id: "AgriTradeHub",
        git: "https://github.com/vdubey92928/AgriTradeHub",
        title: "AgriTradeHub – Direct Farmer-to-Buyer Trading Platform",
        desc:
            "AgriTradeHub is a backend-oriented trading platform developed to connect farmers directly with buyers, promoting transparent agricultural commerce. Farmers can publish product listings with pricing and stock information, while buyers browse products and initiate purchase transactions. The backend is built using Spring Boot with business logic encapsulated in the service layer to ensure validation, transactional integrity, and consistent order lifecycle handling. MySQL is used with a structured relational schema to manage users, products, and transaction records efficiently. Backend validations prevent inconsistent order states and enforce business constraints. The frontend prioritizes simplicity and usability, ensuring accessibility for rural and non-technical users. The project demonstrates structured backend design and domain-focused system modeling.",
        tech: "Spring Boot • Spring Data JPA • MySQL • HTML • Bootstrap",
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
        tech: "Spring Boot • Spring Security • Thymeleaf • MySQL • Bootstrap",
        features: [
            "Multi-role system (Admin, Seller, Buyer)",
            "Spring Security-based authentication and authorization",
            "Order lifecycle management and relational schema design",
            "Responsive server-side rendered interface"
        ],
        img: techbazaar
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

                                    <div className="portfolio-img-wrapper rounded-3">
                                        <img
                                            src={project.img}
                                            className="card-img-top "
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
