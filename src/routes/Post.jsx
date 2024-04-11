import {useContext, useEffect, useState} from "react";
import moment from "moment";
import {ContentfulContext} from "../contexts";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {BLOCKS} from '@contentful/rich-text-types';
import {NavLink, useParams} from "react-router-dom";
import {CategoryBadge} from "../components/CategoryBadge";
import {PostEntry} from "../utils";

const Post = () => {
    const contentful = useContext(ContentfulContext);
    const {post} = useParams();
    const initialState = {
        post: null,
    };
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const fetchData = async () => {
            const entries = await contentful.getEntries({
                content_type: "post",
                'fields.slug[in]': post
            });

            const data = entries.items[0];
            console.log(data);
            const postEntry = new PostEntry(data);

            console.log(postEntry);

            setState(s => ({
                ...s,
                post: {...postEntry}
            }));
        };
        fetchData();
    }, [post]);

    if (!state.post) return null;

    return (
        <article className="d-grid g-2 g-md-3">

            <div className="d-flex flex-row w-100 justify-content-between">
                <Breadcrumb/>
                <div>
                    <CategoryBadge category={state.post.category}/>
                </div>
            </div>

            <div className="my-3">
                <h1>{state.post.title}</h1>
                <cite title="Author">by {state.post.author}</cite>
                <small className="text-muted d-block">{moment(state.post.date).format("LL")}</small>
            </div>

            <h6 className="my-3">{state.post.summary}</h6>

            <PostCover cover={state.post.cover}/>

            <hr/>

            <div className="my-3">
                <PostBody body={state.post.body}/>
            </div>

            <hr/>

            <NavLink className="btn btn-lg btn-outline-dark col-12 my-3" to="/">View more stories</NavLink>

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

const PostCover = ({cover}) => cover && <img src={cover.url} className="rounded-0 img-fluid my-4" alt={cover.title}/>

const PostBody = ({body}) => {
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <p className="lead mb-4">{children}</p>,
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <div className="d-flex m-0 align-items-center flex-column my-4 p-2 shadow-sm">
                    <img className="mx-auto d-block img-fluid mb-1" src={node.data.target.fields.file.url}
                         alt={node.data.target.fields.title}/>
                    <cite className="text-muted">
                        <small>{node.data.target.fields.title}</small>
                    </cite>
                </div>
            ),
        },
    };
    return (
        <>{documentToReactComponents(body, options)}</>
    )
}

export default Post;