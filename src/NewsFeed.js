import React, { useState } from "react";
import Post from "./Post";

const NewsFeed = ({ posts }) => {
  const [showCommentForm, setShowCommentForm] = useState(null);

  const handleCommentButtonClick = (postId) => {
    setShowCommentForm((prevState) =>
      prevState === postId ? null : postId
    );
  };

  return (
    <div className="news-feed-container">
      <h2>NewsFeed</h2>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <Post post={post} />
          <button
            onClick={() => handleCommentButtonClick(post.id)}
            style={{
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s, transform 0.2s",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#0056b3";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#007BFF";
              e.target.style.transform = "scale(1)";
            }}
          >
            {showCommentForm === post.id ? "Hide Comment Form" : "Add Comment"}
          </button>
          {showCommentForm === post.id && <CommentForm postId={post.id} />}
        </div>
      ))}
    </div>
  );
};

const CommentForm = ({ postId }) => {
  return (
    <form
      className="comment-form"
      style={{
        marginTop: "10px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        maxWidth: "400px",
      }}
    >
      <label
        htmlFor={`comment-${postId}`}
        style={{
          display: "block",
          fontSize: "14px",
          marginBottom: "8px",
          fontWeight: "bold",
        }}
      >
        Add a comment:
      </label>
      <textarea
        id={`comment-${postId}`}
        placeholder="Write your comment here"
        style={{
          width: "100%",
          height: "100px",
          padding: "10px",
          fontSize: "14px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          resize: "vertical",
        }}
      />
      <button
        type="submit"
        style={{
          marginTop: "10px",
          backgroundColor: "#0000001a",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#218838";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#28a745";
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default NewsFeed;
