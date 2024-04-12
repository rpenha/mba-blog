import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPanel from "./components/MainPanel";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <>
            <ScrollToTop/>
            <Header/>
            <MainPanel/>
            <Footer/>
        </>
    );
}

export default App;
