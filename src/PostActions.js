import React, { useState } from 'react';

export const PostActions = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleShareClick=()=>{
    alert(`Post shared!`)
  };
 






  return (
    <div className="post-actions">
      <button onClick={handleLike}>
        {isLiked ? 'Unlike' : 'Like'} ({likes})
      </button>
      <button onClick={handleShareClick}>Share</button> 

      
    </div>
  );
};



export const Comment = () => {
  const [comments, setComments] = useState([]);

  const handleCommentsClick = () => {
    const newComments = [
      { user: "John", text: "Great post!" },
      { user: "Alice", text: "Thanks for sharing." }
    ];
    setComments(newComments);
  };

  return (
    <div>
      <button onClick={handleCommentsClick}>Comments</button>
      <div className="comments-section">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <p key={index}>
              <strong>{comment.user}:</strong> {comment.text}
            </p>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};
