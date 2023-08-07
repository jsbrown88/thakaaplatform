import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        getNotifications();
    }, []);

    const getNotifications = async () => {
        try {
            const response = await axios.get('/api/notification');
            setNotifications(response.data);
        } catch (error) {
            console.error(`Error fetching notifications: ${error}`);
        }
    };

    const markNotificationAsRead = async (id) => {
        try {
            await axios.put(`/api/notification/${id}`);
            getNotifications();
        } catch (error) {
            console.error(`Error marking notification as read: ${error}`);
        }
    };

    return (
        <div className="notificationContainer">
            {notifications.map((notification) => (
                <div key={notification._id} className="notificationItem">
                    <p>{notification.message}</p>
                    <button onClick={() => markNotificationAsRead(notification._id)}>
                        Mark as read
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Notifications;