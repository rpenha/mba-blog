import {useContext, useEffect, useState} from "react";
import moment from "moment";
import {ContentfulContext} from "../contexts";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {BLOCKS, INLINES} from '@contentful/rich-text-types';
import {NavLink, useParams} from "react-router-dom";
import {CategoryBadge} from "../components/CategoryBadge";
import {PostEntry} from "../utils";
import YoutubePlayer from "../components/YoutubePlayer";
import Picture from "../components/Picture";
import Breadcrumb, {BreadcrumbItem} from "../components/Breadcrumb";

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
            const postEntry = new PostEntry(data);

            setState(s => ({
                ...s,
                post: {...postEntry}
            }));
        };
        fetchData();
    }, [post, contentful]);

    if (!state.post) return null;

    return (
        <>
            <div className="d-flex flex-row w-100 justify-content-between">
                <Breadcrumb items={[
                    new BreadcrumbItem("Home", "/"),
                    new BreadcrumbItem("Posts"),
                ]}/>
                <div>
                    <CategoryBadge category={state.post.category}/>
                </div>
            </div>
            <article className="d-grid g-2 g-md-3">
                <PostCover cover={state.post.cover}/>
                <div className="my-3">
                    <h1>{state.post.title}</h1>
                    <cite title="Author">by {state.post.author}</cite>
                    <small className="text-muted d-block">{moment(state.post.date).format("LL")}</small>
                </div>

                <h6 className="my-3">{state.post.summary}</h6>

                <hr/>

                <div className="my-3">
                    <PostBody body={state.post.body}/>
                </div>

                <hr/>

                <NavLink className="btn btn-lg btn-outline-dark col-12 my-3" to="/">View more stories</NavLink>

            </article>
        </>
    )
}

const PostCover = ({cover}) => cover && <img src={cover.url} className="rounded-0 img-fluid my-4" alt={cover.title}/>

const PostBody = ({body}) => {
    const youtubeLink = "youtube.com/embed"
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                const hyperlinkNode = node.content.find(x => x.nodeType === "hyperlink");

                return hyperlinkNode && hyperlinkNode.data.uri.indexOf(youtubeLink) > 0
                    ? children :
                    <p className="lead mb-4">{children}</p>;
            },
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <Picture title={node.data.target.fields.title} src={node.data.target.fields.file.url}/>
            ),
            [INLINES.HYPERLINK]: (node) => {
                return node.data.uri.indexOf(youtubeLink) !== -1 ?
                    <YoutubePlayer uri={node.data.uri}/> :
                    <a href={node.data.uri}>{node.content[0].value}</a>;
            }
        },
    };
    return (
        <>{documentToReactComponents(body, options)}</>
    )
}

export default Post;