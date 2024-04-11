import {useState} from "react";
import moment from "moment";
import {NavLink} from "react-router-dom";
import {CategoryBadge} from "../components/CategoryBadge.jsx";

const Post = () => {

    const initialState = {
        title: "Lorem Ipsum",
        cover: "https://source.unsplash.com/1024x200/?bike",
        category: "General",
        author: "Dom Corleone",
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cum cumque, nam numquam omnis possimus quas quis ratione reiciendis",
        content: "Lorem",
        date: new Date()
    };

    const [state] = useState(initialState);

    return (
        <article className="d-grid g-2 g-md-3">
            <div className="d-flex flex-row w-100 justify-content-between">
                <Breadcrumb/>
                <div>
                    <CategoryBadge category={state.category}/>
                </div>
            </div>

            <div className="my-3">
                <h1>{state.title}</h1>
                <cite title="Author">by {state.author}</cite>
                <small className="text-muted d-block">{moment(state.date).format("LL")}</small>
            </div>

            {
                state.cover &&
                <img src={state.cover} className="rounded-0 img-fluid my-4" alt="Cover"/>
            }

            <h6 className="my-3">{state.summary}</h6>

            <div className="my-3">
                <p className="lead">
                    {state.content}
                </p>
            </div>
        </article>
    )
}

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                <li className="breadcrumb-item active" aria-current="page">Posts</li>
            </ol>
        </nav>
    )
}

export default Post;