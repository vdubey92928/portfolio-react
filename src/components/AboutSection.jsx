import React from "react";

const AboutSection = () => {
    return (
        <section id="about" className="py-5">
            <div className="col-sm-8 mx-auto text-center">

                <h1 className="fw-bold title">About Me</h1>

                <p className="lead mt-4 about-lead">
                    I'm a backend-focused developer passionate about building
                    scalable and secure web applications using Java and Spring Boot.
                </p>

                <p className="text-muted mt-3">
                    During my industrial training at SoftPro India, I worked on real client
                    projects and developed full-stack applications with authentication,
                    role-based access, and database integration.
                </p>

                <p className="text-muted">
                    I specialize in designing secure REST APIs and implementing
                    authentication systems using Spring Security and JWT.
                </p>

                {/* 🔥 Highlighted Core Skills */}
                <div className="mt-4">
                    <h5 className="fw-bold text-dark">Core Skills</h5>
                    <p className="fw-semibold">
                        Java • Spring Boot • Spring Security • JWT Authentication • REST APIs
                    </p>
                    <p className="text-muted">
                        MySQL • JPA/Hibernate • HTML • CSS • JavaScript • Bootstrap • Git
                    </p>
                </div>

                {/* 💻 Strong Coding Proof */}
                <div className="mt-3">
                    <p className="fw-semibold text-voilet">
                        Strong problem-solving skills with consistent practice in Data Structures & Algorithms
                    </p>
                </div>

                {/* Coding Profiles */}
                <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
                    <a
                        href="https://leetcode.com/u/vdubey77068"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark"
                    >
                        LeetCode Profile
                    </a>

                    <a
                        href="https://www.geeksforgeeks.org/profile/vdubey77068"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success"
                    >
                        GFG Profile
                    </a>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;