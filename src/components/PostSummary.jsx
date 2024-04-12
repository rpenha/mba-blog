import moment from "moment";
import {NavLink} from "react-router-dom";
import {CategoryBadge} from "./CategoryBadge.jsx";

export const PostSummary = ({entry}) => {
    return (
        <NavLink className="text-decoration-none" to={`/posts/${entry.slug}`}>
            <article className="card rounded-0 shadow-sm shadow-hover mb-4 mb-md-5">
                {
                    entry.cover &&
                    <img src={entry.cover.url} className="card-img-top rounded-0" alt={entry.cover.title}/>
                }
                <div className="card-body">
                    <div>
                        <CategoryBadge category={entry.category}/>
                    </div>

                    <div className="my-4">
                        <h5 className="card-title">{entry.title}</h5>
                        <cite title="Author"><small>by {entry.author}</small></cite>
                    </div>

                    <p className="card-text">
                        {entry.summary}
                    </p>

                    <small className="text-muted d-block">{moment(entry.date).fromNow()}</small>

                </div>
            </article>
        </NavLink>
    );
}