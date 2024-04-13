import {useContext} from "react";
import {AppNavigationContext} from "../contexts";
import NavigationPanel from "./NavigationPanel.jsx";

const CategoriesNavigation = () => {
    const navigationContext = useContext(AppNavigationContext);
    if (!navigationContext) return null;
    const {categories} = navigationContext;
    const items = categories && categories.map(x => ({
        id: x.id,
        caption: x.title,
        to: `/categories/${x.slug}`
    }))

    return <NavigationPanel heading="Categories" items={items}/>;
}

export default CategoriesNavigation;