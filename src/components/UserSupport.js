import React, { useState } from 'react';
import axios from 'axios';

const UserSupport = () => {
    const [supportTicket, setSupportTicket] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setSupportTicket({
            ...supportTicket,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/support', supportTicket);
            if(response.data.success) {
                alert('Your support ticket has been submitted successfully.');
                setSupportTicket({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                alert('There was an error submitting your support ticket. Please try again.');
            }
        } catch(err) {
            console.error(err);
            alert('There was an error submitting your support ticket. Please try again.');
        }
    }

    return (
        <div className="supportForm">
            <h2>User Support</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={supportTicket.name} onChange={handleChange} placeholder="Your Name" required />
                <input type="email" name="email" value={supportTicket.email} onChange={handleChange} placeholder="Your Email" required />
                <input type="text" name="subject" value={supportTicket.subject} onChange={handleChange} placeholder="Subject" required />
                <textarea name="message" value={supportTicket.message} onChange={handleChange} placeholder="Your Message" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserSupport;