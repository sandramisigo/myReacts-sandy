import React from "react";
import PostActions from "./PostActions";


const Post=({post})=>(
    <div className="post">
    <h3>{post.title}</h3>
    <p>{post.content}</p>
    <PostActions/>
   </div>
);

export default Post;