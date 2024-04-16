import CategoriesNavigation from "./CategoriesNavigation";
import AuthorsNavigation from "./AuthorsNavigation";
import {NavLink, useMatch} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => {
    const match = !useMatch("/");
    return (
        <aside className="col-md-3 mb-3 mb-md-0 d-none d-md-block">
            <div className="sticky-md-top d-grid gy-2">
                {match &&
                    <div className="py-4 ">
                        <NavLink to="/" className="text-dark text-decoration-none">
                            <FontAwesomeIcon icon={faHouse}/> home
                        </NavLink>
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