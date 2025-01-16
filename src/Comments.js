import React from 'react';

const Comments= ({ comment }) => (
  <div className="comment-container">
    <h2>User Comment</h2>
    <div className="comment">
  
     <p><strong>{comment.user}:</strong> {comment.text}</p>
  </div>
  </div>
);

export default Comments;
