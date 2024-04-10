import {NavLink} from "react-router-dom";

export const CategoryBadge = ({category}) => (
    <NavLink
        to={`/categories/${category.slug}`}
        className="badge bg-danger text-decoration-none">
        {category.title}
    </NavLink>
)