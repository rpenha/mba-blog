import moment from "moment";
import {NavLink} from "react-router-dom";

export const PostSummary = ({entry}) => {
    //const {title, author, cover, category, date, summary}  = entry;
    return (
        <article className="card rounded-0 shadow-sm">
            {
                entry.cover &&
                <img src={entry.cover.url} className="card-img-top rounded-0" alt={entry.cover.title}/>
            }
            <div className="card-body">
                <div>
                    <span className="badge bg-danger">{entry.category.title}</span>
                </div>

                <div className="my-4">
                    <h5 className="card-title">{entry.title}</h5>
                    <cite title="Author"><small>by {entry.author}</small></cite>
                </div>

                <p className="card-text">
                    {entry.summary}
                </p>

                <small className="text-muted my-3 d-block">{moment(entry.date).fromNow()}</small>

                <NavLink className="card-text" to={`/posts/${entry.slug}`}>Read more</NavLink>

            </div>
        </article>
    );
}