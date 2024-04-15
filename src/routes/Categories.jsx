import {useContext} from "react";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {usePosts} from "../hooks";
import Posts from "../components/Posts";
import Breadcrumb, {BreadcrumbItem} from "../components/Breadcrumb";
import {AppNavigationContext} from "../contexts";
import Loading from "../components/Loading";

const Categories = () => {
    const {posts} = usePosts();
    const {categorySlug} = useParams();
    const navigation = useContext(AppNavigationContext);
    if (!navigation) return null;
    const {categories} = navigation;
    const category = categories.find(x => x.slug === categorySlug);

    return posts ? (
        <>
            <Helmet>
                <title>Category: {category.title}</title>
            </Helmet>
            <div className="mb-4">
                <Breadcrumb items={[
                    new BreadcrumbItem("Categories"),
                    new BreadcrumbItem(category.title)
                ]}/>
            </div>
            <Posts posts={posts}/>
        </>
    ) : <Loading/>;
}

export default Categories;
