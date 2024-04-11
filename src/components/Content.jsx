import {Routes, Route} from "react-router-dom";
import Home from "../routes/Home";
import NoMatch from "../routes/NoMatch";
import Post from "../routes/Post";

export const Content = () => {
    return (
        <section className="col-sm-12 col-md-9 d-grid gy-2 gy-md-3">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts/:post" element={<Post/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
        </section>
    );
}