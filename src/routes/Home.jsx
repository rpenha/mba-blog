import {usePosts} from "../hooks";
import Posts from "../components/Posts";

const Home = () => {
    const {posts} = usePosts();

    return <Posts posts={posts}/>
}

export default Home;
