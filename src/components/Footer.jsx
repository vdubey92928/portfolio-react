import logo from "../assets/img/nav-voilet-logo.png";

export default function Footer() {
    return (
        <footer className="bg-voilet text-white pt-5 pb-1">
            <div className="container text-center">

                {/* Logo */}
                <img src={logo} alt="logo" style={{ width: "120px" }} />

                {/* Name / Tagline */}
                <h5 className="mt-3">Vivekanand Dubey</h5>
                <p className=" mb-3">
                    Java Backend Developer • Spring Boot • REST APIs • React Developer
                </p>

                {/* Social Icons */}
                <div className="d-flex justify-content-center gap-4 fs-3 mb-4">
                    <a
                        href="https://github.com/vdubey92928"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                    >
                        <i className="bi bi-github"></i>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/vivekanand-dubey-vd123754"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                    >
                        <i className="bi bi-linkedin"></i>
                    </a>

                    <a
                        href="mailto:vivekananddubey877@gmail.com"
                        className="text-white"
                    >
                        <i className="bi bi-envelope-fill"></i>
                    </a>

                    <a
                        href="https://www.vivekananddubey.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                    >
                        <i className="bi bi-globe"></i>
                    </a>
                </div>

                {/* Bottom Line */}
                <small>
                    © {new Date().getFullYear()} Vivekanand Dubey • All Rights Reserved
                </small>

            </div>
        </footer>
    );
}
