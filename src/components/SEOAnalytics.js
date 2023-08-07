import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SEOAnalytics = () => {
    const [seoData, setSeoData] = useState(null);
    const [analyticsData, setAnalyticsData] = useState(null);

    useEffect(() => {
        getSeoData();
        getAnalyticsData();
    }, []);

    const getSeoData = async () => {
        try {
            const response = await axios.get('/api/seo');
            setSeoData(response.data);
        } catch (error) {
            console.error('Error fetching SEO data', error);
        }
    };

    const getAnalyticsData = async () => {
        try {
            const response = await axios.get('/api/analytics');
            setAnalyticsData(response.data);
        } catch (error) {
            console.error('Error fetching analytics data', error);
        }
    };

    return (
        <div>
            <h1>SEO and Analytics</h1>
            <div>
                <h2>SEO Data</h2>
                {seoData ? (
                    <div>
                        <p>Page Views: {seoData.pageViews}</p>
                        <p>Bounce Rate: {seoData.bounceRate}</p>
                        <p>Average Session Duration: {seoData.avgSessionDuration}</p>
                    </div>
                ) : (
                    <p>Loading SEO data...</p>
                )}
            </div>
            <div>
                <h2>Analytics Data</h2>
                {analyticsData ? (
                    <div>
                        <p>Users: {analyticsData.users}</p>
                        <p>New Users: {analyticsData.newUsers}</p>
                        <p>Sessions: {analyticsData.sessions}</p>
                    </div>
                ) : (
                    <p>Loading analytics data...</p>
                )}
            </div>
        </div>
    );
};

export default SEOAnalytics;