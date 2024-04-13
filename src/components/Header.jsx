import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header className="bg-body border-bottom shadow-sm w-100">
            <nav className="navbar py-1 py-md-3">
                <div className="container d-flex justify-content-center justify-content-md-start">
                    <Link className="btn btn-lg btn-dark" to="/" >
                        <FontAwesomeIcon icon={faCouch} size="1x" />
                    </Link>
                    <span className="h3 my-0 mx-2">This must be the place</span>

                    {/*<span className="mx-0 mx-md-2 my-2 my-md-1 h3 fw-bolder">This must be the place</span>*/}
                </div>
            </nav>
        </header>
    );
}

export default Header;