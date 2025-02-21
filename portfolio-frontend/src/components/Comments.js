import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Comment.css"
const Comments = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetchComments();
  // }, []);

  // const fetchComments = async () => {
  //   const response = await axios.get("http://localhost:8080/api/comments");
  //   setComments(response.data);
  // };

  // const submitComment = async () => {
  //   if (name && message) {
  //     await axios.post("http://localhost:8080/api/comments", { name, message });
  //     setName("");
  //     setMessage("");
  //     fetchComments();
  //   }
  // };

  return (
    <div className="comments">
      <h2>Visitor Comments</h2>
      <div className="comment-form">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Your comment"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={console.log("Comment submitted")}>Submit</button>
      </div>
      <div className="comment-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p><strong>{comment.name}</strong> - {new Date(comment.timestamp).toLocaleString()}</p>
            <p>{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;