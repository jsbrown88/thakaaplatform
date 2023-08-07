import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    try {
      const response = await axios.get('/api/user');
      setUserProfile(response.data);
    } catch (error) {
      console.error(`Error fetching user profile: ${error}`);
    }
  };

  const updateUserProfile = async () => {
    try {
      const response = await axios.put('/api/user', userProfile);
      setUserProfile(response.data);
    } catch (error) {
      console.error(`Error updating user profile: ${error}`);
    }
  };

  return (
    <div id="profileContainer">
      <h2>User Profile</h2>
      <div>
        <label>Name: </label>
        <span>{userProfile.name}</span>
      </div>
      <div>
        <label>Email: </label>
        <span>{userProfile.email}</span>
      </div>
      <div>
        <label>Experience: </label>
        <span>{userProfile.experience}</span>
      </div>
      <div>
        <label>Interests: </label>
        <span>{userProfile.interests}</span>
      </div>
      <button onClick={updateUserProfile}>Update Profile</button>
    </div>
  );
};

export default UserProfile;