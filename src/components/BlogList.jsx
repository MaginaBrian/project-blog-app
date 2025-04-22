import BlogPost from './BlogPost';
import "../index.css";

const BlogList = ({ posts, onUpdate, onDelete }) => {
  return (
    <div className="blog-list-container">
      {posts.length === 0 ? (
        <p className="blog-list-empty">No posts available</p>
      ) : (
        posts.map(post => (
          <BlogPost key={post.id} post={post} onUpdate={onUpdate} onDelete={onDelete}  />
        ))
      )}
    </div>
  );
};

export default BlogList;