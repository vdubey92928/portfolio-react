import React from "react";

const AboutSection = () => {
    return (
        <section id="about" className="py-5">
            <div className="col-sm-8 mx-auto text-center">

                <h1 className="fw-bold title">About Me</h1>

                <p className="lead mt-4 about-lead">
                    I'm a backend-focused developer passionate about building
                    real-world web applications using Java and Spring Boot.
                </p>

                <p className="text-muted mt-3">
                    During my industrial training at SoftPro India, I worked on real client
                    projects and gained hands-on experience developing full-stack
                    applications with authentication, role-based access and database
                    integration.
                </p>

                <p className="text-muted">
                    I enjoy designing clean APIs, solving business problems and
                    continuously improving my backend engineering skills.
                </p>

            </div>
        </section>
    );
};

export default AboutSection;
