import {useContext} from "react";
import {AppNavigationContext} from "../contexts";
import NavigationPanel from "./NavigationPanel.jsx";

const AuthorsNavigation = () => {
    const navigationContext = useContext(AppNavigationContext);
    if (!navigationContext) return null;
    const {authors} = navigationContext;
    const items = authors && authors.map(x => ({
        id: x.id,
        caption: x.name,
        to: `/authors/${x.slug}`
    }))

    return <NavigationPanel heading="Authors" items={items}/>;
}

export default AuthorsNavigation;