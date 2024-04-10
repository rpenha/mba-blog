import {PostSummary} from "../components/PostSummary.jsx";
import {ContentfulContext} from "../contexts.js";
import {useContext, useEffect, useState} from "react";

const Home = () => {
    const contentful = useContext(ContentfulContext)
    const [state, setState] = useState({
        posts: []
    });

    useEffect(() => {
        const fetchData = async () => {
            const entries = await contentful.getEntries({
                content_type: "post"
            });

            const data = entries.items.map(entry => {
                console.log(entry)
                return {
                    id: entry.sys.id,
                    title: entry.fields.title,
                    slug: entry.fields.slug,
                    author: entry.fields.author.fields.name,
                    category: {
                        title: entry.fields.category.fields.title,
                        slug: entry.fields.category.fields.slug,
                    },
                    cover: {
                        title: entry.fields.cover.fields.title,
                        url: entry.fields.cover.fields.file.url
                    },
                    summary: entry.fields.summary,
                    content: entry.fields.content,
                    date: new Date(entry.sys.createdAt)
                }
            });

            setState(s => {
                return {
                    ...s,
                    posts: [...data]
                }
            });

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