import CategoriesNavigation from "./CategoriesNavigation";
import AuthorsNavigation from "./AuthorsNavigation";

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