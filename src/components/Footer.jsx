

export default function Footer() {
    return (
        <footer className="footer-theme pt-5 pb-2">
            <div className="container text-center">

                {/* Name / Tagline */}
                <h5 className="mt-3 fw-bold">Vivekanand Dubey</h5>
                <p className=" mb-3">
                    Java Backend Developer • Spring Boot • REST APIs • React Developer
                </p>

                {/* Social Icons */}
                <div className="d-flex justify-content-center gap-4 fs-3 mb-4">

                    <a
                        href="https://github.com/vdubey92928"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social"
                    >
                        <i className="bi bi-github"></i>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/vivekanand-dubey-vd123754"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social"
                    >
                        <i className="bi bi-linkedin"></i>
                    </a>

                    <a
                        href="mailto:vivekananddubey877@gmail.com"
                        className="footer-social"
                    >
                        <i className="bi bi-envelope-fill"></i>
                    </a>

                    <a
                        href="https://www.vivekananddubey.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social"
                    >
                        <i className="bi bi-globe"></i>
                    </a>

                </div>

                {/* Bottom Line */}
                <small>
                    © {new Date().getFullYear()} Vivekanand Dubey • All Rights Reserved
                </small>

            </div>
        </footer >
    );
}
