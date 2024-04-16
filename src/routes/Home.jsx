import {usePosts} from "../hooks";
import Posts from "../components/Posts";
import Loading from "../components/Loading";

const Home = () => {
    const {posts} = usePosts();

    return <Loading/>;
}

export default Home;
