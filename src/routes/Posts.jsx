import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ContentfulContext} from "../contexts";
import PostEntry from "../utils";
import PostSummary from "../components/PostSummary";
import Paginator from "../components/Paginator";
import Loading from "../components/Loading";

const Posts = () => {
    const contentful = useContext(ContentfulContext);
    const {page} = useParams();
    const pageIndex = parseInt(page ?? 1) - 1;
    const limit = 2;
    const [state, setState] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const skip = pageIndex * limit;
            const query = {
                content_type: "post",
                limit: limit,
                skip: skip,
                select: [
                    "fields.title",
                    "fields.slug",
                    "fields.author",
                    "fields.category",
                    "fields.cover",
                    "fields.summary",
                    "sys.createdAt"
                ].join(",")
            };

            const entries = await contentful.getEntries(query);
            const data = entries.items.map(entry => new PostEntry(entry));

            setState(s => ({
                ...s,
                totalEntries: entries.total,
                posts: [...data]
            }));
        }

        fetchData();

    }, [contentful, pageIndex, limit]);

    return state ? (
        <div className="g-0">
            {state.posts.map(post => <PostSummary key={post.id} entry={post}/>)}
            <Paginator pageIndex={pageIndex} limit={state.limit} totalEntries={state.totalEntries}/>
        </div>
    ) : <Loading/>;
}

export default Posts;