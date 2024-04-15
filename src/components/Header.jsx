import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCouch} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <>
            <header className="bg-body border-bottom shadow-sm w-100 d-md-none sticky-top">
                <nav className="navbar">
                    <div className="container d-flex justify-content-center justify-content-md-start">
                        <Link className="btn btn btn-dark d-inline-block" to="/">
                            <FontAwesomeIcon icon={faCouch} size="1x" inverse/>
                        </Link>
                        <span className="mx-2 text-nowrap fs-5 fw-bolder d-inline-block">
                            [ This must be the place ]
                        </span>
                    </div>
                </nav>
            </header>
            <header className="bg-body border-bottom shadow-sm w-100 d-none d-md-block sticky-top">
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