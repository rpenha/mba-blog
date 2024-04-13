import {useContext, useEffect, useState} from "react";
import {ContentfulContext} from "./contexts";

export const useCategories = () => {
    const contentful = useContext(ContentfulContext);
    const [categories, setCategories] = useState();

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

            setCategories(() => ([...data]));
        }

        fetchData();

    }, [contentful]);

    return [categories];
}

export const useAuthors = () => {
    const contentful = useContext(ContentfulContext);
    const [authors, setAuthors] = useState();

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

            setAuthors(() => ([...data]));
        }

        fetchData();

    }, [contentful]);

    return [authors];
}