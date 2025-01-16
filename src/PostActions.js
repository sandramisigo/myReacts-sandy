import React, { useState } from 'react';

const PostActions = () => {
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

export default PostActions;
