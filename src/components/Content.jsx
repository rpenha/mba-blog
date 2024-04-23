import {Routes, Route} from "react-router-dom";
import Home from "../routes/Home";
import Post from "../routes/Post";
import Categories from "../routes/Categories";
import Authors from "../routes/Authors";
import NotFound from "../routes/NotFound.jsx";

const Content = () => {
    return (
        <section className="col-sm-12 col-md-9 d-grid gy-2 gy-md-3">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/page/:page" element={<Home/>}/>
                <Route path="/posts/:postSlug" element={<Post/>}/>
                <Route path="/categories/:categorySlug" element={<Categories/>}/>
                <Route path="/categories/:categorySlug/page/:page" element={<Categories/>}/>
                <Route path="/authors/:authorSlug" element={<Authors/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </section>
    );
}

export default Content;