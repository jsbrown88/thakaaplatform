import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvestorAccount = () => {
    const [investorAccount, setInvestorAccount] = useState({});

    useEffect(() => {
        getInvestorAccount();
    }, []);

    const getInvestorAccount = async () => {
        try {
            const response = await axios.get('/api/investor');
            setInvestorAccount(response.data);
        } catch (error) {
            console.error(`Error fetching investor account: ${error}`);
        }
    };

    const updateInvestorAccount = async (updatedAccount) => {
        try {
            const response = await axios.put('/api/investor', updatedAccount);
            setInvestorAccount(response.data);
        } catch (error) {
            console.error(`Error updating investor account: ${error}`);
        }
    };

    return (
        <div className="investorAccountContainer">
            <h2>Investor Account</h2>
            <p>Name: {investorAccount.name}</p>
            <p>Email: {investorAccount.email}</p>
            <p>Investments: {investorAccount.investments}</p>
            <button onClick={() => updateInvestorAccount(investorAccount)}>Update Account</button>
        </div>
    );
};

export default InvestorAccount;