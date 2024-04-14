import {useContext} from "react";
import {useParams} from "react-router-dom";
import {usePosts} from "../hooks";
import Posts from "../components/Posts";
import Breadcrumb, {BreadcrumbItem} from "../components/Breadcrumb";
import {AppNavigationContext} from "../contexts";
import {Helmet} from "react-helmet-async";

const Authors = () => {
    const {posts} = usePosts();
    const {authorSlug} = useParams();
    const navigation = useContext(AppNavigationContext);
    if (!navigation) return null;
    const {authors} = navigation;
    const author = authors.find(x => x.slug === authorSlug);

    return (
        <>
            <Helmet>
                <title>Author: {author.name}</title>
            </Helmet>
            <div className="mb-4">
                <Breadcrumb items={[
                    new BreadcrumbItem("Home", "/"),
                    new BreadcrumbItem("Authors"),
                    new BreadcrumbItem(author.name)
                ]}/>
            </div>
            <Posts posts={posts}/>
        </>
    )
}

export default Authors;
