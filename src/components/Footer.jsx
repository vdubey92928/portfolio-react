import logo from "../assets/img/nav-voilet-logo.png";

export default function Footer() {
    return (
        <div className="row bg-voilet py-5 text-white">
            <div className="col-sm-10 mx-auto my-5">
                <div className="row text-center">

                    <div className="col-sm-4">
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className="col-sm-4">
                        <ul className="list-unstyled d-flex justify-content-center flex-wrap">
                            {["Home", "About", "Process", "Portfolio", "Blog", "Service", "Contact"].map(
                                (i, idx) => (
                                    <li key={idx} className="mx-2">
                                        <a href="#" className="nav-link text-white h-underline">
                                            {i}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                        <p className="pt-3">Developed by Vivekanand Dubey</p>
                    </div>

                    <div className="col-sm-4">
                        <p>Copyright © 2025.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
