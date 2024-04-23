import CategoriesNavigation from "./CategoriesNavigation";
import AuthorsNavigation from "./AuthorsNavigation";
import {Link, useMatch} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    const match = !useMatch("/");
    return (
        <aside className="col-md-3 mb-3 mb-md-0 d-none d-md-block">
            <div className="sticky-md-top d-grid gy-2">
                {match &&
                    <div className="py-4 ">
                        <Link to="/" className="text-dark text-decoration-none">
                            <FontAwesomeIcon icon={faHouse}/> home
                        </Link>
                    </div>
                }
                <div className="py-2 ">
                    <CategoriesNavigation/>
                </div>
                <div className="py-2 ">
                    <AuthorsNavigation/>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;