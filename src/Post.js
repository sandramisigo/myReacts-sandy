import React from "react";
import {PostActions} from "./PostActions";
import { Comment } from "./PostActions";


const Post=({post})=>(
    <div className="post">
    <h3>{post.title}</h3>
    <p>{post.content}</p>
    <PostActions/>
    <Comment/>
   </div>
);

export default Post;