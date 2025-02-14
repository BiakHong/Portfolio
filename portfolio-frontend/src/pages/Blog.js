// src/pages/Blog.js
import "../styles/Blog.css"
const Blog = () => {
    const posts = [
      {
        id: 1,
        title: "Getting Started with Spring Boot",
        date: "October 10, 2024",
        content: "A beginner's guide to building RESTful APIs with Spring Boot.",
      },
      {
        id: 2,
        title: "Mastering React Hooks",
        date: "November 15, 2024",
        content: "Learn how to use React Hooks to manage state and side effects.",
      },
    ];
  
    return (
      <div className="blog">
        <h1>Blog</h1>
        <div className="blog-posts">
          {posts.map((post) => (
            <div key={post.id} className="blog-post">
              <h2>{post.title}</h2>
              <p className="date">{post.date}</p>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Blog;