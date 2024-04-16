import {useContext, useEffect, useState} from "react";
import {ContentfulContext} from "./contexts";
import {useParams} from "react-router-dom";
import PostEntry from "./utils.js";

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

    return {categories};
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

    return {authors};
}

export const usePosts = () => {
    const contentful = useContext(ContentfulContext);
    const {page, categorySlug, authorSlug} = useParams();
    const [posts, setPosts] = useState(null);
    const pageIndex = parseInt(page ?? 1) - 1;
    const pageLimit = 3;
    const skip = pageIndex * pageLimit;

    useEffect(() => {
        setPosts(() => null);
        const buildFilter = () => {
            let filter = {};

            if (categorySlug) {
                filter = {
                    ...filter,
                    "fields.category.sys.contentType.sys.id": "category",
                    "fields.category.fields.slug[match]": categorySlug
                };
            }

            if (authorSlug) {
                filter = {
                    ...filter,
                    "fields.author.sys.contentType.sys.id": "author",
                    "fields.author.fields.slug[match]": authorSlug
                };
            }

            return filter;
        }

        const fetchData = async () => {
            const query = {
                content_type: "post",
                limit: pageLimit,
                skip: skip,
                order: "-sys.createdAt",
                select: [
                    "fields.title",
                    "fields.slug",
                    "fields.author",
                    "fields.category",
                    "fields.cover",
                    "fields.summary",
                    "sys.createdAt"
                ].join(","),
                ...buildFilter()
            };

            const entries = await contentful.getEntries(query);
            const data = entries.items.map(entry => new PostEntry(entry));

            setPosts(s => ({
                ...s,
                entries: [...data],
                pageLimit: pageLimit,
                pageIndex: pageIndex,
                totalEntries: entries.total
            }));
        }

        fetchData();

    }, [contentful, categorySlug, authorSlug, pageIndex, pageLimit, skip]);

    return {posts};
}

export const usePost = () => {
    const contentful = useContext(ContentfulContext);
    const {postSlug} = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const entries = await contentful.getEntries({
                content_type: "post",
                "fields.slug": postSlug
            });

            const data = entries.items[0];
            const postEntry = new PostEntry(data);

            setPost(() => ({...postEntry}));
        };
        fetchData();
    }, [postSlug, contentful]);

    return {post};
}