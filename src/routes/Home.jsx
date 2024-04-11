import {PostSummary} from "../components/PostSummary";
import {ContentfulContext} from "../contexts";
import {useContext, useEffect, useState} from "react";
import {PostEntry} from "../utils";

const Home = () => {
    const contentful = useContext(ContentfulContext);
    const [state, setState] = useState({
        posts: []
    });

    useEffect(() => {
        const fetchData = async () => {
            const entries = await contentful.getEntries({
                content_type: "post",
                select: [
                    "fields.title",
                    "fields.slug",
                    "fields.author",
                    "fields.category",
                    "fields.cover",
                    "fields.summary",
                    "sys.createdAt"
                ].join(",")
            });

            const data = entries.items.map(entry => new PostEntry(entry));

            setState(s => ({
                ...s,
                posts: [...data]
            }));

            // console.log(entries);
            console.log(data);
        }

        fetchData();

    }, [contentful]);


    return (
        <>
            {state.posts.map(post => <PostSummary key={post.id} entry={post}/>)}
        </>
    );
}

export default Home;