import React from "react";

const skills = [
    { name: "Java", icon: "fa-brands fa-java" },
    { name: "Spring Boot", icon: "fa-solid fa-leaf" },
    { name: "REST APIs", icon: "fa-solid fa-cloud" },
    { name: "MySQL", icon: "fa-solid fa-database" },
    { name: "React", icon: "fa-brands fa-react" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt" },
    { name: "Git & GitHub", icon: "fa-brands fa-github" },
    { name: "Spring Security", icon: "fa-solid fa-shield-halved" },
    { name: "JWT Auth", icon: "fa-solid fa-key" },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-5 bg-light">
            <div className="col-sm-10 mx-auto">

                {/* HEADER */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold title">Technical Skills</h1>
                    <p className="text-muted fs-5">
                        Technologies I use to build production-ready applications
                    </p>
                </div>

                {/* SKILL GRID */}
                <div className="row g-4">

                    {skills.map((skill, i) => (
                        <div key={i} className="col-6 col-md-4 col-lg-3">

                            <div className="skill-card theme-card text-center p-4 h-100">
                                <i className={`${skill.icon} skill-icon mb-3`}></i>
                                <h6 className="fw-bold">{skill.name}</h6>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default SkillsSection;
