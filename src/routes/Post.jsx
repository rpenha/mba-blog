import moment from "moment";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {BLOCKS, INLINES} from '@contentful/rich-text-types';
import {Link} from "react-router-dom";
import {usePost} from "../hooks";
import CategoryBadge from "../components/CategoryBadge";
import YoutubePlayer from "../components/YoutubePlayer";
import Picture from "../components/Picture";
import Breadcrumb, {BreadcrumbItem} from "../components/Breadcrumb";
import Loading from "../components/Loading";
import {Helmet} from "react-helmet-async";

const Post = () => {
    const {post} = usePost();

    return post ? (
        <>
            <Helmet>
                <title>{post.title}</title>
                <meta property="og:title" content={post.title}/>
                <meta property="og:type" content="article"/>
                <meta property="og:url" content={window.location.href}/>
                {post.cover && <meta property="og:image" content={post.cover.url}/>}
                <meta name="description" content={post.summary}/>
            </Helmet>
            <div className="d-flex flex-row w-100 justify-content-between">
            <Breadcrumb items={[
                    new BreadcrumbItem("Posts"),
                ]}/>
                <div>
                    <CategoryBadge category={post.category}/>
                </div>
            </div>
            <article className="d-grid g-2 g-md-3">
                <PostCover cover={post.cover}/>
                <div className="my-3">
                    <h1>{post.title}</h1>
                    <cite title="Author">by {post.author}</cite>
                    <small className="text-muted d-block">{moment(post.date).format("LL")}</small>
                </div>

                <span className="h6 my-3">{post.summary}</span>

                <hr/>

                <PostBody body={post.body}/>

                <Link className="btn btn-lg btn-outline-dark col-12 my-3" to="/">View more stories</Link>

            </article>
        </>
    ) : <Loading/>
}

const PostCover = ({cover}) => (
    cover && <img src={cover.url} className="rounded-0 img-fluid my-4 w-100" alt={cover.title}/>
)

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
                    <div className="mb-4">
                        <YoutubePlayer uri={node.data.uri}/>
                    </div> :
                    <a href={node.data.uri}>{node.content[0].value}</a>;
            }
        },
    };
    return (
        <>{documentToReactComponents(body, options)}</>
    )
}

export default Post;