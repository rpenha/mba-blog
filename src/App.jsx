import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPanel from "./components/MainPanel";
import ScrollToTop from "./components/ScrollToTop";
import {AppNavigationContext} from "./contexts";
import {useAuthors, useCategories} from "./hooks";
import {useEffect, useState} from "react";

function App() {
    const [categories] = useCategories();
    const [authors] = useAuthors();
    const [state, setState] = useState();

    useEffect(() => {
        if (!authors) return;
        setState(s => ({
            ...s,
            categories: [...categories],
        }))
    }, [categories]);

    useEffect(() => {
        if (!authors) return;
        setState(s => ({
            ...s,
            authors: [...authors]
        }))
    }, [authors]);

    return (
        <AppNavigationContext.Provider value={state}>
            <Header/>
            <MainPanel/>
            <Footer/>
            <ScrollToTop/>
        </AppNavigationContext.Provider>
    );
}

export default App;
