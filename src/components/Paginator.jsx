import {NavLink} from "react-router-dom";

const Paginator = ({pageIndex, limit, totalEntries}) => {
    const isLastPage = (pageIndex + 1) * limit >= totalEntries;
    const previous = pageIndex === 1 ? "/" : `/page/${pageIndex}`;
    const next = `/page/${pageIndex + 2}`;
    const variations = [
        "btn-group btn-group-lg w-100 d-none d-md-block",
        "btn-group w-100 d-block d-md-none"
    ];

    return (
        <nav aria-label="Pagination">
            {variations.map((x, i) => (
                <div key={i} className={x}>
                    {
                        pageIndex === 0 &&
                        <NavLink className="btn btn-outline-dark col-12" to={next}>View more stories</NavLink>
                    }
                    {
                        pageIndex > 0 &&
                        (
                            <>
                                <NavLink className="btn btn-outline-dark col-4" to={previous}>Previous</NavLink>
                                <span className="btn btn-outline-dark col-4 disabled">Page 2</span>
                                <NavLink
                                    className={["btn btn-outline-dark col-4", isLastPage ? "disabled" : null].join(" ")}
                                    to={next}>Next</NavLink>
                            </>
                        )
                    }
                </div>
            ))}
        </nav>
    )
}

export default Paginator;