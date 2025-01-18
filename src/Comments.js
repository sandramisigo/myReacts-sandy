import React from 'react';

const Comments= ({ comment }) => (
  <div className="comment-container">
    <h2>Comments</h2>
    <div className="comment" style={{
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s, transform 0.2s",
            }}>
  
     <p><strong>{comment.user}:</strong> {comment.text}</p>
  </div>
  </div>
);

export default Comments;
