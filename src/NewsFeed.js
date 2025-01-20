import React, { useState } from "react";
import Post from "./Post";
import "./NewsFeed.css"; // Import the CSS file

const NewsFeed = ({ posts }) => {
  const [showCommentForm, setShowCommentForm] = useState(null);
  const [comments, setComments] = useState({}); // State to store comments for each post

  const handleCommentButtonClick = (postId) => {
    setShowCommentForm((prevState) =>
      prevState === postId ? null : postId
    );
  };

  const handleCommentSubmit = (postId, commentText) => {
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), commentText],
    }));
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

          {/* Display comment form if selected */}
          {showCommentForm === post.id && (
            <CommentForm postId={post.id} onSubmit={handleCommentSubmit} />
          )}

          {/* Display submitted comments */}
          <div className="comments-section">
            {comments[post.id] &&
              comments[post.id].map((comment, index) => (
                <p key={index} className="comment">
                  {comment}
                </p>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentForm = ({ postId, onSubmit }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onSubmit(postId, commentText); // Pass the comment back to the parent
      setCommentText(""); // Clear the textarea after submission
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label htmlFor={`comment-${postId}`} className="comment-label">
        Add a comment:
      </label>
      <textarea
        id={`comment-${postId}`}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
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
