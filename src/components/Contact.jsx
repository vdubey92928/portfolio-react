export default function Contact() {
    return (
        <div className="row py-5 bg-light">
            <div className="col-sm-10 mx-auto">
                <div className="row">

                    {/* LEFT */}
                    <div className="col-md-5 mb-5">
                        <h2 className="fw-bold mb-3">Let’s discuss your Project</h2>
                        <p className="text-muted mb-5">
                            I'm available for freelance work. Drop me a line if you have a
                            project in mind.
                        </p>

                        <ContactItem icon="geo-alt" label="Address" value="Lucknow, India" />
                        <ContactItem icon="envelope" label="My Email" value="vd123754@mail.com" />
                        <ContactItem icon="telephone" label="Call Me Now" value="+91 7706892928" />

                        <div className="d-flex">
                            {["facebook", "instagram", "linkedin", "twitter-x", "youtube"].map(
                                (i, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="btn btn-outline-secondary mx-2 btn-sm rounded-circle"
                                    >
                                        <i className={`bi bi-${i}`}></i>
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="col-md-6">
                        <p className="text-muted fs-5 mb-4">
                            I'm always open to discussing design work or partnerships.
                        </p>

                        <form>
                            <div className="row g-3">
                                {[
                                    "Name*", "Email*", "Budget*", "Subject*"
                                ].map((p, i) => (
                                    <div key={i} className="col-md-12 mt-4">
                                        <input
                                            type="text"
                                            className="form-control border-0 bg-transparent border-bottom"
                                            placeholder={p}
                                            required
                                        />
                                    </div>
                                ))}

                                <div className="col-12 mt-4">
                                    <textarea
                                        className="form-control border-0 bg-transparent border-bottom"
                                        rows="2"
                                        placeholder="Message*"
                                    ></textarea>
                                </div>

                                <div className="col-5 mx-auto text-center mt-5">
                                    <button className="bg-voilet rounded-pill w-100 p-3 border-0">
                                        Submit <i className="bi bi-send ms-1"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

function ContactItem({ icon, label, value }) {
    return (
        <div className="mb-4 d-flex align-items-center">
            <i
                className={`bi bi-${icon} btn btn-outline-secondary rounded-2 bg-lightpink text-primary fs-4 me-3`}
            ></i>
            <div>
                <span className="text-muted d-block">{label}:</span>
                <span className="fw-semibold">{value}</span>
            </div>
        </div>
    );
}
