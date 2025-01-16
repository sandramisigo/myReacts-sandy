import React from "react";

const ProfileHeader=({name,biography})=>{
    const handleClick = () => {
        alert(`You followed ${name}`)
    }
    return(
    <div className="profile-header">
     <img src="/sandra.jpeg" alt="myprofile"/>
     <h2>{name}</h2>
     <p>{biography}</p>
     <button onClick={handleClick}>Follow Me</button>
    </div>
);
}

export default ProfileHeader;