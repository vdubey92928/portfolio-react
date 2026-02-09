import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/img/nav_logo.png";

const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Process", id: "process" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Resume", id: "resume" },
    { name: "Contact", id: "contact" },
];

export default function Navbar() {
    const [active, setActive] = useState("home");
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === "/";

    // Scroll handler (only valid on home)
    const handleScroll = (id) => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    // Click handler (decides scroll vs route)
    const handleNavClick = (item) => {
        if (item.id === "resume") {
            navigate("/resume");
            setActive("resume");
            return;
        }

        // If not on home, go home first
        if (!isHomePage) {
            navigate("/");
            setTimeout(() => handleScroll(item.id), 100);
        } else {
            handleScroll(item.id);
        }
    };

    // Scroll-based active section (HOME ONLY)
    useEffect(() => {
        if (!isHomePage) return;

        const onScroll = () => {
            let current = "home";

            navItems.forEach((item) => {
                if (item.id === "resume") return;

                const section = document.getElementById(item.id);
                if (section) {
                    const top = section.offsetTop - 150;
                    if (window.scrollY >= top) {
                        current = item.id;
                    }
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [isHomePage]);

    // Route-based active (Resume page)
    useEffect(() => {
        if (location.pathname === "/resume") {
            setActive("resume");
        }
    }, [location.pathname]);

    return (
        <div className="row sticky-top bg-white shadow-sm">
            <div className="col-sm-10 mx-auto">
                <nav className="navbar navbar-expand-lg">
                    <img src={logo} className="img-fluid" alt="logo" />

                    <button
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#nav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="nav">
                        <ul className="navbar-nav ms-auto">
                            {navItems.map((item) => (
                                <li
                                    key={item.id}
                                    className={`nav-item mx-2 rounded-2 ${active === item.id ? "bg-voilet" : ""
                                        }`}
                                >
                                    <button
                                        className={`nav-link border-0 bg-transparent ${active === item.id ? "text-white" : ""
                                            }`}
                                        onClick={() => handleNavClick(item)}
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}
