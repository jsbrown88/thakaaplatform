import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Forum = () => {
    const [forumThreads, setForumThreads] = useState([]);
    const [newThread, setNewThread] = useState('');

    useEffect(() => {
        getForumThreads();
    }, []);

    const getForumThreads = async () => {
        try {
            const response = await axios.get('/api/forum');
            setForumThreads(response.data);
        } catch (error) {
            console.error(`Error fetching forum threads: ${error}`);
        }
    };

    const createForumThread = async () => {
        try {
            const response = await axios.post('/api/forum', { text: newThread });
            setForumThreads([...forumThreads, response.data]);
            setNewThread('');
        } catch (error) {
            console.error(`Error creating new thread: ${error}`);
        }
    };

    const handleInputChange = (event) => {
        setNewThread(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        createForumThread();
    };

    return (
        <div>
            <h1>Forum</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={newThread}
                    onChange={handleInputChange}
                    placeholder="Start a new discussion"
                />
                <button type="submit">Post</button>
            </form>
            {forumThreads.map((thread) => (
                <div key={thread._id}>
                    <h2>{thread.title}</h2>
                    <p>{thread.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Forum;