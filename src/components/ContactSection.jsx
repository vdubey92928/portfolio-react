import React from "react";

export default function ContactSection() {
    return (
        <section id="contact" className="scroll-section">
            <div className="row py-5 bg-light">
                <div className="col-sm-10 mx-auto">
                    <div className="row align-items-center">

                        {/* LEFT SIDE */}
                        <div className="col-md-5 mb-5">
                            <h2 className="fw-bold mb-3">Let’s Connect</h2>

                            <p className="text-muted mb-5">
                                Open to internships, entry-level roles and freelance projects.
                            </p>

                            <ContactItem icon="geo-alt" label="Location" value="Lucknow, India" />
                            <ContactItem icon="envelope" label="Email" value="vivekananddubey877@gmail.com" />
                            <ContactItem icon="telephone" label="Phone" value="+91 7706892928" />

                            {/* SOCIAL LINKS */}
                            <div className="d-flex gap-4 mt-4">
                                <a
                                    href="https://github.com/vdubey92928"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none theme-text"
                                >
                                    <i className="bi bi-github fs-3"></i> GitHub
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/vivekanand-dubey-vd123754"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none theme-text"
                                >
                                    <i className="bi bi-linkedin fs-3"></i> LinkedIn
                                </a>
                            </div>
                        </div>

                        {/* RIGHT SIDE CTA */}
                        <div className="col-md-7 text-center">

                            <h3 className="fw-bold mb-3">
                                Have an opportunity or project in mind?
                            </h3>

                            <p className="text-muted fs-5 mb-4">
                                The fastest way to reach me is LinkedIn Or Email.
                            </p>

                            <div className="d-flex flex-wrap gap-3 justify-content-center">

                                {/* LINKEDIN BUTTON */}
                                <a
                                    href="https://www.linkedin.com/in/vivekanand-dubey-vd123754"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn contact-send-btn btn-lg px-5"
                                >
                                    Message on LinkedIn
                                    <i className="bi bi-linkedin ms-2"></i>
                                </a>

                                {/* EMAIL BUTTON */}
                                <a
                                    href="mailto:vivekananddubey877@gmail.com"
                                    className="btn contact-send-btn btn-lg px-5"
                                >
                                    Send Email
                                    <i className="bi bi-envelope ms-2"></i>
                                </a>

                            </div>

                            {/* OPTIONAL MODAL BUTTON */}
                            <div className="mt-4">
                                <button
                                    className="btn btn-sm btn-outline-theme rounded-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#contactModal"
                                >
                                    Prefer a contact form?
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* CTA MODAL */}
            <div className="modal fade" id="contactModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content contact-modal-content">

                        <div className="modal-header contact-modal-header text-white border-0">
                            <h5 className="modal-title fw-bold">
                                Contact Options
                            </h5>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body text-center p-5">

                            <p className="text-muted mb-2">
                                A dedicated contact form is coming soon.
                            </p>

                            <p className="text-muted mb-4">
                                For now, the fastest way to reach me is LinkedIn or email.
                                You can also call <strong>+91 7706892928</strong>.
                            </p>




                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactItem({ icon, label, value }) {
    return (
        <div className="mb-4 d-flex align-items-center">
            <i className={`bi bi-${icon} btn btn-outline-secondary rounded-2 fs-4 me-3`}></i>
            <div>
                <span className="text-muted d-block">{label}</span>
                <span className="fw-semibold">{value}</span>
            </div>
        </div>
    );
}
