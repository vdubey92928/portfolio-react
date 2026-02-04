import resumePdf from "../assets/resume/Vivekanand_Dubey_FullStackDev.pdf";

const Resume = () => {
    return (
        <div className="container py-5">
            <h1 className="fw-bold mb-4">My Resume</h1>

            <iframe
                src={resumePdf}
                title="Resume"
                width="100%"
                height="1110px"
                style={{ border: "none" }}
            />

            <div className="text-center mt-4">
                <a
                    href={resumePdf}
                    download
                    className="btn btn-primary px-4 py-2"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
};

export default Resume;
