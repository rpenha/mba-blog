import {usePosts} from "../hooks";
import PostSummary from "../components/PostSummary";
import Paginator from "../components/Paginator";
import Loading from "../components/Loading";

const Posts = () => {
    const [posts] = usePosts();

    return posts ? (
        <div className="g-0">
            {posts.entries.map(post => <PostSummary key={post.id} entry={post}/>)}
            <Paginator pageIndex={posts.pageIndex} limit={posts.pageLimit} totalEntries={posts.totalEntries}/>
        </div>
    ) : <Loading/>;
}

export default Posts;