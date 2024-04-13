import Couch from "../../assets/images/couch-32x32.png";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-body border-bottom shadow-sm w-100">
            <nav className="navbar py-1 py-md-3">
                <div className="container d-flex justify-content-center justify-content-md-start">
                    <NavLink className="navbar-brand mx-0" to="/" >
                        <img src={Couch} alt="Couch" className="d-inline-block my-0"/>
                    </NavLink>
                    <span className="mx-0 mx-md-2 my-3 my-md-1 h3 fw-bolder">This must be the place</span>
                </div>
            </nav>
        </header>
    );
}

export default Header;