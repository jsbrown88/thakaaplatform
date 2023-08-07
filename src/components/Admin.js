import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const [siteData, setSiteData] = useState({});
    const [adminUser, setAdminUser] = useState({});

    useEffect(() => {
        // Fetch site data and admin user data when component mounts
        getSiteData();
        getAdminUser();
    }, []);

    const getSiteData = async () => {
        try {
            const response = await axios.get('/api/siteData');
            setSiteData(response.data);
        } catch (error) {
            console.error('Error fetching site data:', error);
        }
    };

    const getAdminUser = async () => {
        try {
            const response = await axios.get('/api/adminUser');
            setAdminUser(response.data);
        } catch (error) {
            console.error('Error fetching admin user data:', error);
        }
    };

    const updateSiteData = async (newData) => {
        try {
            const response = await axios.put('/api/siteData', newData);
            setSiteData(response.data);
        } catch (error) {
            console.error('Error updating site data:', error);
        }
    };

    const loginAdmin = async (credentials) => {
        try {
            const response = await axios.post('/api/adminLogin', credentials);
            setAdminUser(response.data);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const logoutAdmin = async () => {
        try {
            await axios.post('/api/adminLogout');
            setAdminUser({});
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div>
            {/* Admin interface goes here */}
        </div>
    );
};

export default Admin;