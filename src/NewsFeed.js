import React, { useState } from "react";
import Post from "./Post";
import "./NewsFeed.css"; // Import the CSS file

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
        <div key={post.id} className="post-container">
          <Post post={post} />
          <button
            className="comment-button"
            onClick={() => handleCommentButtonClick(post.id)}
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
    <form className="comment-form">
      <label htmlFor={`comment-${postId}`} className="comment-label">
        Add a comment:
      </label>
      <textarea
        id={`comment-${postId}`}
        placeholder="Write your comment here"
        className="comment-textarea"
      />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default NewsFeed;
