import React from "react";
import Post from "./Post";


const NewsFeed=({posts})=>(
        <div className="news-feed-container">
            <h2>NewsFeed</h2>
            {posts.map((post)=>(<Post key={post.id} post={post}/>
            )             
            )}
        </div>
    );

    export default NewsFeed
