import {useContext, useEffect, useState} from "react";
import {ContentfulContext} from "../contexts";
import {NavLink} from "react-router-dom";

export const Sidebar = () => {
    return (
        <section className="col-sm-12 col-md-3 mb-3 mb-md-0">
            <div className="sticky-md-top d-grid gy-2">
                <div className="py-2 ">
                    <CategoriesPanel/>
                </div>

                <div className="py-2 ">
                    <AuthorsPanel/>
                </div>
            </div>
        </section>
    );
}

const CategoriesPanel = () => {
    const contentful = useContext(ContentfulContext);
    const [state, setState] = useState({
        categories: []
    });

    useEffect(() => {
        const fetchData = async () => {
            const entries = await contentful.getEntries({
                content_type: "category",
                order: "fields.title",
                select: [
                    "sys.id",
                    "fields.title",
                    "fields.slug"
                ].join(",")
            });

            const data = entries.items.map(entry => ({
                id: entry.sys.id,
                title: entry.fields.title,
                slug: entry.fields.slug
            }));

            setState(s => ({
                ...s,
                categories: [...data]
            }));

            console.log(data);
        }

        fetchData();

    }, [contentful]);
    return(
        <>
            <div className="h5 border-bottom py-2">Categories</div>
            <div className="d-flex flex-column p-0">
                {state.categories.map(x => <NavLink key={x.id} to={`/categories/${x.slug}`}>{x.title}</NavLink>)}
            </div>
        </>
    )
}

const AuthorsPanel = () => {
    const contentful = useContext(ContentfulContext);
    const [state, setState] = useState({
        authors: []
    });

    useEffect(() => {
        const fetchData = async () => {
            const entries = await contentful.getEntries({
                content_type: "author",
                order: "fields.name",
                select: [
                    "sys.id",
                    "fields.name",
                    "fields.slug"
                ].join(",")
            });

            const data = entries.items.map(entry => ({
                id: entry.sys.id,
                name: entry.fields.name,
                slug: entry.fields.slug
            }));

            setState(s => ({
                ...s,
                authors: [...data]
            }));

            console.log(data);
        }

        fetchData();

    }, [contentful]);
    return(
        <>
            <div className="h5 border-bottom py-2">Authors</div>
            <div className="d-flex flex-column p-0">
                {state.authors.map(x => <NavLink key={x.id} to={`/authors/${x.slug}`}>{x.name}</NavLink>)}
            </div>
        </>
    )
}