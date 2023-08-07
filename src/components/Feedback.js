import React, { useState } from 'react';
import axios from 'axios';

const Feedback = () => {
    const [feedback, setFeedback] = useState('');
    const [featureNotifications, setFeatureNotifications] = useState([]);

    const submitFeedback = async () => {
        try {
            const response = await axios.post('/api/feedback', { feedback });
            if (response.data.success) {
                alert('Feedback submitted successfully');
                setFeedback('');
            } else {
                alert('Failed to submit feedback');
            }
        } catch (error) {
            console.error('Error submitting feedback', error);
        }
    };

    const getFeatureNotifications = async () => {
        try {
            const response = await axios.get('/api/featureNotifications');
            if (response.data.success) {
                setFeatureNotifications(response.data.featureNotifications);
            } else {
                alert('Failed to fetch feature notifications');
            }
        } catch (error) {
            console.error('Error fetching feature notifications', error);
        }
    };

    return (
        <div>
            <h2>Feedback</h2>
            <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
            <button onClick={submitFeedback}>Submit Feedback</button>

            <h2>Feature Notifications</h2>
            <button onClick={getFeatureNotifications}>Refresh Notifications</button>
            {featureNotifications.map((notification, index) => (
                <div key={index}>
                    <h3>{notification.title}</h3>
                    <p>{notification.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Feedback;