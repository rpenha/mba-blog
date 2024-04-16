import {NavLink, useMatch} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronUp, faHouse} from "@fortawesome/free-solid-svg-icons";
import CategoriesNavigation from "./CategoriesNavigation";
import AuthorsNavigation from "./AuthorsNavigation";

const Footer = () => {
    const match = !useMatch("/");
    return (
        <footer className="py-4 mt-2 mt-md-3 bg-body border-top shadow w-100 align-self-end">
            <div className="container px-3">
                <div className="row gy-2">
                    <div className="col-12 col-lg-9 d-flex justify-content-center justify-content-lg-start align-items-center">
                        <span className="text-muted">Miscellaneous Stories generated by AI</span>
                    </div>
                    <div className="col-12 col-lg-3 d-flex justify-content-center justify-content-lg-start align-items-center">
                        <div className="btn-group py-3 w-100">
                            {/*<a className="btn btn-outline-dark">*/}
                            {/*    <FontAwesomeIcon icon={faChevronLeft}/> Back*/}
                            {/*</a>*/}
                            {match &&
                                <NavLink to="/" className="btn btn-outline-dark">
                                    <FontAwesomeIcon icon={faHouse}/> Home
                                </NavLink>
                            }
                            <a href="#" className="btn btn-outline-dark">
                                <FontAwesomeIcon icon={faChevronUp}/> Top
                            </a>
                        </div>
                        {/*<div className="d-inline-flex d-md-none gap-4 fs-4">*/}
                        {/*    {match &&*/}
                        {/*        <NavLink to="/" className="text-muted text-decoration-none">*/}
                        {/*            <FontAwesomeIcon icon={faHouse}/> home*/}
                        {/*        </NavLink>*/}
                        {/*    }*/}
                        {/*    <a href="#" className="text-muted text-decoration-none">*/}
                        {/*        <FontAwesomeIcon icon={faChevronUp}/> top*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                        {/*<div className="d-none d-md-inline-flex gap-4">*/}
                        {/*    {match &&*/}
                        {/*        <NavLink to="/" className="text-muted text-decoration-none">*/}
                        {/*            <FontAwesomeIcon icon={faHouse}/> home*/}
                        {/*        </NavLink>*/}
                        {/*    }*/}
                        {/*    <a href="#" className="text-muted text-decoration-none">*/}
                        {/*        <FontAwesomeIcon icon={faChevronUp}/> top*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <nav className="my-3 gx-5 d-sm-block d-md-none">
                    <div className="row fs-6">
                        <div className="col-12 col-md-3">
                            <CategoriesNavigation/>
                        </div>
                        <div className="col-12 col-md-3">
                            <AuthorsNavigation/>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;