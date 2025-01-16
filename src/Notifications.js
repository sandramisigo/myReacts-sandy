import React from "react";

const Notifications=({notifications})=>(
    <div className="notifications-container">
    <h2>Notifications</h2>
     {notifications.map((notification)=>(
        <div key={notification.id} className="notification-item">
            <p>{notification.message}</p>
    </div>
))}
</div>
);

export default Notifications