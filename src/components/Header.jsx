import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header className="bg-body border-bottom shadow-sm w-100">
            <nav className="navbar py-1 py-md-3">
                <div className="container d-flex justify-content-center justify-content-md-start">
                    <Link className="btn btn-dark d-inline-block d-md-none" to="/" >
                        <FontAwesomeIcon icon={faCouch} size="1x" inverse/>
                    </Link>
                    <Link className="btn btn-lg btn-dark d-none d-md-inline-block" to="/" >
                        <FontAwesomeIcon icon={faCouch} size="1x" inverse/>
                    </Link>
                    <span className="mx-2 text-nowrap fs-5 fw-bolder d-block d-md-none">[ This must be the place ]</span>
                    <span className="mx-2 text-nowrap fs-3 fw-bolder d-none d-md-block">[ This must be the place ]</span>
                </div>
            </nav>
        </header>
    );
}

export default Header;