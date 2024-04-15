import {usePosts} from "../hooks";
import Posts from "../components/Posts";
import Loading from "../components/Loading";

const Home = () => {
    const {posts} = usePosts();

    return posts ? <Posts posts={posts}/> : <Loading/>;
}

export default Home;
