import React from 'react';
import ProfileHeader from './ProfileDetails';
import Comments from './Comments';
import NewsFeed from './NewsFeed';
import Notifications from './Notifications';
import './App.css'; 


const App=()=> {
  const posts = [
    { id:1, title: "Web", content: "I love this website" },
    { id:2, title: "About programming", content: "Coding is super easy!" },
  ];
  const comments = [
    { user: "John", text: "Great post!" },
    { user: "Alice", text: "Thanks for sharing." }
  ];
  const notifications = [
    {id:1, message:"Someone viewed your profile."},
    {id:2, message:"Jane added a new photo."},
    {id:3, message:"Susan followed you."},
    {id:4, message:"James liked your post."},
  ];

  return (
    <div className='app-container'>
     <ProfileHeader name="Sandra Missy" biography="Web developer" profilePic="sandra.jpeg"/>
     <NewsFeed posts={posts}/>

     <div className="comments-section">
        {comments.map((comment, index) => (
        <Comments key={index} comment={comment} />
        ))}
     </div>
     <Notifications notifications={notifications}/>
    </div>
  );
}

export default App;
