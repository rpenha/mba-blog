import PostSummary from "./PostSummary.jsx";
import Pagination from "./Pagination.jsx";
import Loading from "./Loading.jsx";

const Posts = ({posts}) => {
    return posts ? (
        <div className="g-0">
            {posts.entries.map(post => <PostSummary key={post.id} entry={post}/>)}
            <Pagination pageIndex={posts.pageIndex} limit={posts.pageLimit} totalEntries={posts.totalEntries}/>
        </div>
    ) : <Loading/>;
}

export default Posts;