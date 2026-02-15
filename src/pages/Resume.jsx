import resumePdf from "../assets/resume/Vivekanand_Dubey_FullStackDev.pdf";
import useSEO from "../hooks/useSEO";

const Resume = () => {
    useSEO({
        title: "Resume | Vivekanand Dubey",
        description: "View the resume of Java Backend Developer Vivekanand Dubey.",
        canonical: "https://www.vivekananddubey.com/resume",
    });

    return (
        <div className="container py-5">

            <h1 className="fw-bold mb-4 title">My Resume</h1>

            <div className="resume-frame-wrapper">
                <iframe
                    src={resumePdf}
                    title="Resume"
                    width="100%"
                    height="1110px"
                    className="resume-frame"
                />
            </div>

            <div className="text-center mt-4">
                <a
                    href={resumePdf}
                    download
                    className="btn contact-send-btn px-4 py-2"
                >
                    Download Resume
                </a>
            </div>

        </div>
    );
};

export default Resume;
