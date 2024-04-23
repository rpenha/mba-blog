import {Link, useLocation} from "react-router-dom";

const Pagination = ({pageIndex, limit, totalEntries}) => {
    const {pathname} = useLocation();

    const getBasePath = (pathname) => {
        if (!pathname) return null;
        const re = /\/page\/\d+$/g;
        const path = pathname.replace(re, "");
        return path !== "/" ? path : "";
    }

    const basePath  = getBasePath(pathname);
    const isLastPage = (pageIndex + 1) * limit >= totalEntries;

    const previous = `${basePath}/page/${pageIndex}`;
    const next = `${basePath}/page/${pageIndex + 2}`;
    const variations = [
        "btn-group btn-group-lg w-100 d-none d-md-block",
        "btn-group w-100 d-block d-md-none"
    ];

    return (
        <nav aria-label="Pagination">
            {variations.map((x, i) => (
                <div key={i} className={x}>
                    {
                        pageIndex === 0 && !isLastPage &&
                        <Link className="btn btn-outline-dark col-12" to={next}>View more stories</Link>
                    }
                    {
                        pageIndex > 0 &&
                        (
                            <>
                                <Link className="btn btn-outline-dark col-4" to={previous}>Previous</Link>
                                <span className="btn btn-outline-dark col-4 disabled">Page {pageIndex + 1}</span>
                                <Link
                                    className={["btn btn-outline-dark col-4", isLastPage ? "disabled" : null].join(" ")}
                                    to={next}>Next</Link>
                            </>
                        )
                    }
                </div>
            ))}
        </nav>
    )
}

export default Pagination;