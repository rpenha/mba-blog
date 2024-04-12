import {ContentfulContext} from "../contexts";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PostEntry from "../utils";
import PostSummary from "../components/PostSummary";
import Paginator from "../components/Paginator";

const Posts = () => {
    const contentful = useContext(ContentfulContext);
    const {page} = useParams();
    const pageIndex = parseInt(page ?? 1) - 1;
    const limit = 2;
    const [state, setState] = useState({
        totalEntries: 0,
        limit: limit,
        posts: []
    });

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


    return (
        <div className="g-0">
            {state.posts.map(post => <PostSummary key={post.id} entry={post}/>)}
            <Paginator pageIndex={pageIndex} limit={state.limit} totalEntries={state.totalEntries}/>
        </div>
    );
}

export default Posts;