import {NavLink} from "react-router-dom";

const Breadcrumb = ({items}) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {items && items.map((item, i) => {
                    return !item.to
                        ? <li key={i} className="breadcrumb-item" aria-current="page">{item.caption}</li>
                        : <li key={i} className="breadcrumb-item"><NavLink to={item.to}>{item.caption}</NavLink></li>;
                })}
            </ol>
        </nav>
    )
}

export class BreadcrumbItem {
    constructor(caption, to) {
        this.caption = caption;
        this.to = to;
    }
}

export default Breadcrumb;