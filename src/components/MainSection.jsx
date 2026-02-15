import React from 'react'
import hero from "../assets/img/vivekanand.png";
import { Link } from 'react-router-dom';

const MainSection = () => {
    return (
        <section id="home" className="scroll-section">
            <div className="row mb-5 pt-5 ">
                <div className="col-sm-10 mx-auto">
                    <div className="row align-items-center">

                        {/* LEFT SIDE CONTENT */}
                        <div className="col-sm-6 text-responsive">

                            <h1 className="my-2 title hero-title">
                                Hi, I'm Vivekanand Dubey
                            </h1>

                            <h2 className="fw-bold hero-subtitle">
                                Java Backend Developer
                            </h2>

                            <p className="my-3 fs-5">
                                I build secure and scalable web applications using
                                <strong> Java, Spring Boot, React and MySQL.</strong>
                            </p>

                            <p className="text-muted">
                                Focused on backend engineering, REST APIs, authentication,
                                and real-world business logic.
                            </p>

                            {/* ACTION BUTTONS */}
                            <div className="d-flex gap-3 justify-content-center justify-content-sm-start mt-4">
                                <Link to="/projects" className="btn btn-primary px-4 py-2">
                                    View Projects
                                </Link>

                                <Link to="/resume" className="btn btn-outline-theme px-4 py-2">
                                    Download Resume
                                </Link>

                            </div>

                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="col-sm-5 mx-auto mt-5 mt-sm-0">
                            <div className="rounded-circle hero-img-bg overflow-hidden shadow">
                                <img
                                    src={hero}
                                    className="img-fluid w-100 object-fit-cover"
                                    alt="Vivekanand Dubey"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSection
