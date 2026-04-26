import { useParams, Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

import qr1 from "../assets/img/qr/qr_index.png";
import qr2 from "../assets/img/qr/qr_about.png";
import qr3 from "../assets/img/qr/qr_admin.png";
import qr4 from "../assets/img/qr/qr_payment.png";
import qr5 from "../assets/img/qr/qr_ticket.png";
import qr6 from "../assets/img/qr/qr_scanner.png";

import at1 from "../assets/img/agritrade/agri_index.png";
import at2 from "../assets/img/agritrade/agri_about.png";
import at3 from "../assets/img/agritrade/agri_cntact.png";
import at4 from "../assets/img/agritrade/agri_service.png";
import at5 from "../assets/img/agritrade/agri_adminDash.png";
import at6 from "../assets/img/agritrade/agri_farmerDash.png";


import tb1 from "../assets/img/tb/tb_index.png";
import tb2 from "../assets/img/tb/tb_product.png";
import tb3 from "../assets/img/tb/tb_checkout.png";
import tb4 from "../assets/img/tb/tbazaar_order.png";
import tb5 from "../assets/img/tb/tb_AdminDash.png";
import tb6 from "../assets/img/tb/tb_sellerDash.png";

import nou1 from "../assets/img/nou/nou_index.png";
import nou2 from "../assets/img/nou/nou_contact.png";
import nou3 from "../assets/img/nou/nou_reg.png";
import nou4 from "../assets/img/nou/nou_login.png";
import nou5 from "../assets/img/nou/nou_dash.png";
import nou6 from "../assets/img/nou/nou_studash.png";

import { useState } from "react";


const projectData = [
    {
        id: "Qr-Ticket-Application",
        git: "https://github.com/vdubey92928/qr-ticket-application",
        title: "QR Ticket & Secure Entry Validation System (Rastriya Prerna Sthal)",
        desc:
            "The QR Ticket & Secure Entry Validation System is a full-stack application developed to automate and secure event access control. The platform enables users to generate tickets without authentication, embedding each ticket with a uniquely encoded QR payload. Gate operators authenticate separately and validate entries in real time using a dedicated scanning interface. The backend, implemented using Spring Boot and Spring Security, enforces strict role-based access control and ensures transactional consistency to prevent duplicate or unauthorized entries. RESTful APIs manage ticket generation and validation workflows with optimized response handling. MySQL is structured with relational constraints to maintain ticket state integrity. The application follows a layered architecture separating controller, service, and repository layers, ensuring scalability, maintainability, and secure concurrent processing.",
        tech: "Spring Boot • Spring Security • React.js • MySQL • Bootstrap",
        features: [
            "QR-based ticket generation with unique encoded identifiers",
            "Role-based authentication for Admin and Gate operators",
            "Real-time ticket validation via REST APIs",
            "Transactional prevention of duplicate or unauthorized entry"
        ],
        screenshots: [
            { id: "index", label: "Index", img: qr1 },
            { id: "about", label: "About", img: qr2 },
            { id: "admin", label: "Product", img: qr3 },
            { id: "payment", label: "Help", img: qr4 },
            { id: "ticket", label: "Contact", img: qr5 },
            { id: "scanner", label: "Contact", img: qr6 },
        ]
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
        screenshots: [
            { id: "Home", label: "Index", img: at1 },
            { id: "About", label: "About", img: at2 },
            { id: "Contact", label: "Product", img: at3 },
            { id: "Service", label: "Help", img: at4 },
            { id: "Admin Dash", label: "Contact", img: at5 },
            { id: "Farmer Dash", label: "Contact", img: at6 },
        ]
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
        screenshots: [
            { id: "Home", label: "Index", img: nou1 },
            { id: "Contact", label: "About", img: nou2 },
            { id: "Register", label: "Product", img: nou3 },
            { id: "Login", label: "Product", img: nou4 },
            { id: "Admin Dash", label: "Help", img: nou5 },
            { id: "Student Dash", label: "Contact", img: nou6 },
        ]
    },
    {
        id: "TechBazar",
        git: "https://github.com/vdubey92928/TechBazaar",
        title: "TechBazar – Multi-Vendor E-Commerce Platform",
        desc:
            "TechBazar is a multi-vendor e-commerce platform developed using Spring Boot following the MVC architectural pattern. The system supports Admin, Seller, and Buyer roles with secure role-based authentication implemented using Spring Security. Sellers manage product listings and inventory, buyers handle cart and order workflows, and administrators oversee overall platform operations. Backend services are structured using Spring Data JPA with a normalized MySQL relational schema to manage products, users, and transactions efficiently. The application implements order lifecycle state management and secure session handling to ensure consistent transactional processing. Thymeleaf enables dynamic server-side rendering while Bootstrap ensures responsive UI design. The project demonstrates enterprise-style backend architecture and structured multi-role system implementation.",
        tech: "Spring Boot  • Thymeleaf • MySQL • Bootstrap",
        features: [
            "Multi-role system (Admin, Seller, Buyer)",
            "Spring Security-based authentication and authorization",
            "Order lifecycle management and relational schema design",
            "Responsive server-side rendered interface"
        ],
        screenshots: [
            { id: "Home", label: "Index", img: tb1 },
            { id: "Product", label: "About", img: tb2 },
            { id: "Checkout", label: "Product", img: tb3 },
            { id: "Order", label: "Help", img: tb4 },
            { id: "Admin Dash", label: "Contact", img: tb5 },
            { id: "Seller Dash", label: "Contact", img: tb6 },
        ]
    }
];

export default function Project() {
    const { id } = useParams();


    const project = projectData.find((p) => p.id === id);

    if (project) {
        useSEO({
            title: `${project.title} | Vivekanand Dubey`,
            description: project.desc.slice(0, 150),
            canonical: `https://www.vivekananddubey.com/projects/${project.id}`,
        });
    }

    if (!project) {
        return (
            <div className="container py-5 text-center">
                <h2>Project not found</h2>
                <Link to="/" className="btn contact-send-btn mt-3">
                    Back to Home
                </Link>
            </div>
        );
    }

    const [activeSS, setActiveSS] = useState(
        project.screenshots?.[0]?.id
    );

    const activeImage = project.screenshots?.find(
        (ss) => ss.id === activeSS
    );

    return (
        <div className="container py-5">

            <h1 className="fw-bold text-center my-5 title">{project.title}</h1>

            <p className="fs-5 mt-2 project-desc">{project.desc}</p>

            <p className="fw-semibold mt-4">
                Tech Stack:
                <span className="project-tech ms-2">{project.tech}</span>
            </p>

            {project.git && (
                <p className="fw-semibold mt-3">
                    <a
                        href={project.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-link text-decoration-none"
                    >
                        🔗 View on GitHub
                    </a>
                </p>
            )}

            <h4 className="mt-4">Key Features</h4>
            <ul className="project-features">
                {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>

            {/* 🔹 Screenshot Section */}
            {project.screenshots && (
                <>
                    <hr className="my-5" />

                    <h4 className="mb-4 text-center">Project Screenshots</h4>

                    {/* Horizontal Scrollable Button Bar */}
                    <div className="d-flex overflow-auto gap-2 pb-3 screenshots">
                        {project.screenshots.map((ss) => (
                            <button
                                key={ss.id}
                                className={`btn btn-outline-theme flex-shrink-0`}
                                onClick={() => setActiveSS(ss.id)}
                            >
                                {ss.label}
                            </button>
                        ))}
                    </div>

                    {/* Active Screenshot Display */}
                    <div className="text-center mt-4">
                        {activeImage && (
                            <div style={{ maxHeight: "700px", overflowY: "auto" }}>
                                <img
                                    src={activeImage.img}
                                    alt={activeImage.label}
                                    className="img-fluid rounded shadow w-100"
                                />
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
