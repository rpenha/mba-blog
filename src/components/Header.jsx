import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCouch} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <>
            <header className="d-md-none sticky-top bg-body shadow-sm">
                <nav className="navbar">
                    <div className="container d-flex justify-content-center justify-content-md-start">
                        <Link className="btn btn-sm btn-dark d-inline-block" to="/">
                            <FontAwesomeIcon icon={faCouch} size="1x" inverse/>
                        </Link>
                        <span className="mx-2 my-1 text-nowrap fs-5 fw-bolder d-inline-block">
                            [ This must be the place ]
                        </span>
                    </div>
                </nav>
            </header>
            <header className="d-none d-md-block sticky-top bg-body shadow-sm">
                <nav className="navbar">
                    <div className="container d-flex justify-content-center justify-content-md-start">
                        <Link className="btn btn-lg btn-dark d-inline-block" to="/">
                            <FontAwesomeIcon icon={faCouch} size="1x" inverse/>
                        </Link>
                        <span className="mx-2 text-nowrap fs-3 fw-bolder d-inline-block">
                            [ This must be the place ]
                        </span>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;