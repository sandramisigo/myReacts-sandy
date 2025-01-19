import React from 'react';
import ProfileHeader from './ProfileDetails';
import Footer from './Footer';
import NewsFeed from './NewsFeed';
import Notifications from './Notifications';
import './App.css'; 
import Navbar from "./Navbar";


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
    {id: 1, message: "Someone viewed your profile."},
    {id: 2, message: "Jane added a new photo."},
    {id: 3, message: "Susan followed you."},
    {id: 4, message: "Mark liked your post."},
    {id: 5, message: "Alex commented on your photo: 'Awesome shot!'"}, 
 

  ];

  return (



    <div className='app-container'>
    

  
      <Navbar />
    <div className="content">
    <NewsFeed posts={posts}/>
     <ProfileHeader name="Sandra Missy" biography="Software developer skilled in React, JavaScript, HTML, and CSS. Focused on building dynamic, user-friendly web apps. Driven by innovation and continuous learning." profilePic="sandra.jpeg"/>
    
     
     
    <Notifications notifications={notifications}/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
