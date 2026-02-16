import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import logo from "../assets/img/nav_logo.png";

const navItems = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Portfolio", id: "portfolio" },
    { name: "About", id: "about" },
    { name: "Resume", id: "resume" },
    { name: "Contact", id: "contact" },
];

export default function Navbar() {

    const [active, setActive] = useState("home");
    const location = useLocation();
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    const isHomePage = location.pathname === "/";

    /* Scroll to section */
    const handleScroll = (id) => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    /* Nav click handler */
    const handleNavClick = (item) => {
        if (item.id === "resume") {
            navigate("/resume");
            setActive("resume");
            return;
        }

        if (!isHomePage) {
            navigate("/");
            setTimeout(() => handleScroll(item.id), 100);
        } else {
            handleScroll(item.id);
        }
    };

    /* Active section on scroll */
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

    /* Resume page active state */
    useEffect(() => {
        if (location.pathname === "/resume") {
            setActive("resume");
        }
    }, [location.pathname]);

    return (
        <div className="row sticky-top navbar-theme shadow-sm">
            <div className="col-sm-10 mx-auto">

                <nav className="navbar navbar-expand-lg">

                    {/* LOGO */}
                    <img src={logo} className="img-fluid text-white" alt="logo" />

                    {/* MOBILE TOGGLER */}
                    <button
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#nav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* NAV ITEMS */}
                    <div className="collapse navbar-collapse" id="nav">
                        <ul className="navbar-nav ms-auto align-items-lg-center">

                            {navItems.map((item) => (
                                <li
                                    key={item.id}
                                    className={`nav-item mx-2 rounded-2 nav-item-theme ${active === item.id ? "nav-active" : ""
                                        }`}
                                >
                                    <button
                                        className={`nav-link border-0 bg-transparent ${active === item.id ? "text-white" : "nav-link-theme"
                                            }`}
                                        onClick={() => handleNavClick(item)}
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}

                            {/* 🌙 THEME TOGGLE BUTTON */}
                            <li className="nav-item ms-5">
                                <button
                                    onClick={toggleTheme}
                                    className="btn btn-outline-theme rounded-circle"
                                    style={{ width: "42px", height: "42px" }}
                                >
                                    <i className={`bi ${theme === "light" ? "bi-moon-stars" : "bi-sun"} me-1`}></i>

                                </button>
                            </li>

                        </ul>
                    </div>

                </nav>

            </div>
        </div>
    );
}
