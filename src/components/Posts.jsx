import PostSummary from "./PostSummary";
import Pagination from "./Pagination";

const Posts = ({posts}) => {
    return posts ? (
        <div className="g-0">
            {posts.entries.map(post => <PostSummary key={post.id} entry={post}/>)}
            <Pagination pageIndex={posts.pageIndex} limit={posts.pageLimit} totalEntries={posts.totalEntries}/>
        </div>
    ) : null;
}

export default Posts;