import {NavLink} from "react-router-dom";
import CategoriesNavigation from "./CategoriesNavigation.jsx";
import AuthorsNavigation from "./AuthorsNavigation.jsx";

export const Sidebar = () => {
    return (
        <section className="col-sm-12 col-md-3 mb-3 mb-md-0">
            <div className="sticky-md-top d-grid gy-2">
                <div className="py-2 ">
                    <CategoriesNavigation/>
                </div>
                <div className="py-2 ">
                    <AuthorsNavigation/>
                </div>
            </div>
        </section>
    );
}

export default Sidebar;