import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Loading from "./Loading.jsx";

const ScrollToTop = ({children}) => {
    const {pathname} = useLocation();
    const [state, setState] = useState({
        active: true
    });

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        setState(s => ({
            ...s,
            active: false
        }));
    }, [pathname]);

    return state.active ? <Loading/> : children;
}

export default ScrollToTop;