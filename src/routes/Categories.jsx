import {useContext} from "react";
import {useParams} from "react-router-dom";
import {usePosts} from "../hooks";
import Posts from "../components/Posts";
import Breadcrumb, {BreadcrumbItem} from "../components/Breadcrumb";
import {AppNavigationContext} from "../contexts";

const Categories = () => {
    const {posts} = usePosts();
    const {categorySlug} = useParams();
    const navigation = useContext(AppNavigationContext);
    if (!navigation) return null;
    const {categories} = navigation;
    const category = categories.find(x => x.slug === categorySlug);

    return (
        <>
            <div className="mb-4">
                <Breadcrumb items={[
                    new BreadcrumbItem("Home", "/"),
                    new BreadcrumbItem("Categories"),
                    new BreadcrumbItem(category.title)
                ]}/>
            </div>
            <Posts posts={posts}/>
        </>
    )
}

export default Categories;
