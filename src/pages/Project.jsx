import { useParams, Link } from "react-router-dom";


const projectData = [
    {
        id: "qr-ticket",
        git: "https://github.com/vdubey92928/qr-ticket-application",
        title: "QR Ticket & Entry Validation System (Rastriya Prerna Sthal)",
        desc:
            "The QR Ticket & Entry Validation System is a full-stack web application built to streamline and secure event entry management. Users can generate tickets without login, each containing a unique QR code. Gate users authenticate separately and validate tickets in real time by scanning QR codes. The backend, developed using Java and Spring Boot, enforces role-based access control and instantly updates ticket status to prevent duplicate or unauthorized entry. The system is designed to handle high traffic efficiently while maintaining data consistency and security. Thymeleaf and Bootstrap are used to deliver a responsive and user-friendly interface for administrators and gate operators.",
        tech: "Spring Boot • Thymeleaf • MySQL • Bootstrap",
        features: [
            "QR-based ticket generation without login",
            "Role-based access for Admin and Gate users",
            "Real-time QR validation at entry points",
            "Automatic prevention of duplicate entry"
        ]
    },
    {
        id: "lms",
        git: "https://github.com/vdubey92928/nouapp",
        title: "LMS – NOU e-Gyan Portal",
        desc:
            "The LMS – NOU e-Gyan Portal is a Spring Boot MVC-based Learning Management System developed to digitize academic workflows. It supports Admin, Faculty, and Student roles with clearly defined permissions. Admin users manage courses and users, faculty upload academic content, and students securely access learning materials. The application follows a clean MVC architecture using Spring Boot, with MySQL for persistent data storage. Thymeleaf enables efficient server-side rendering of dynamic academic data, while Bootstrap ensures a responsive and consistent UI. This project highlights structured backend design, role-based authentication, and enterprise-style application development.",
        tech: "Spring Boot • Thymeleaf • MySQL",
        features: [
            "Admin, Faculty, and Student role management",
            "Course and academic content handling",
            "Secure authentication and authorization",
            "Clean MVC-based backend architecture"
        ]
    },
    {
        id: "agritradehub",
        git: "https://github.com/vdubey92928/AgriTradeHub",
        title: "AgriTradeHub – Farmer to Buyer Platform",
        desc:
            "AgriTradeHub is a web platform designed to connect farmers directly with buyers, eliminating middlemen and enabling transparent agricultural trade. Farmers can list products with pricing and quantity, while buyers can browse listings and place orders through a simple, user-friendly interface. The backend is built using Java and Spring Boot, with MySQL managing product and order data. Business rules are enforced at the backend to ensure data integrity and efficient order processing. The frontend is developed using HTML and Bootstrap, focusing on simplicity and accessibility for non-technical users. This project reflects strong domain understanding and backend-driven system design.",
        tech: "Spring Boot • MySQL • HTML • Bootstrap",
        features: [
            "Farmer product listing and pricing",
            "Buyer browsing and order placement",
            "Simple and accessible user interface",
            "Backend-driven product and order logic"
        ]

    }
];

export default function Project() {
    const { id } = useParams();
    const project = projectData.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="container py-5 text-center">
                <h2>Project not found</h2>
                <Link to="/" className="btn btn-primary mt-3">
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-5">



            <h1 className="fw-bold text-center my-5 title">{project.title}</h1>
            <p className="text-muted fs-5 mt-2">{project.desc}</p>

            <p className="fw-semibold mt-3">
                Tech Stack: <span className="text-primary">{project.tech}</span>
            </p>

            <p className="fw-semibold mt-3">
                {project.git && (
                    <span className="text-primary">
                        <a
                            href={project.git}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none fw-semibold"
                        >
                            🔗 View on GitHub
                        </a>
                    </span>
                )}

            </p>

            <h4 className="mt-4">Key Features</h4>
            <ul>
                {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>



        </div>
    );
}
