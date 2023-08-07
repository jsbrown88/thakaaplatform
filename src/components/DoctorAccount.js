import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorAccount = () => {
  const [doctorAccount, setDoctorAccount] = useState({});

  useEffect(() => {
    getDoctorAccount();
  }, []);

  const getDoctorAccount = async () => {
    try {
      const response = await axios.get('/api/doctor');
      setDoctorAccount(response.data);
    } catch (error) {
      console.error(`Error fetching doctor account: ${error}`);
    }
  };

  const updateDoctorAccount = async () => {
    try {
      const response = await axios.put('/api/doctor', doctorAccount);
      setDoctorAccount(response.data);
    } catch (error) {
      console.error(`Error updating doctor account: ${error}`);
    }
  };

  return (
    <div className="doctor-account-container">
      <h2>Doctor Account</h2>
      <form onSubmit={updateDoctorAccount}>
        <label>
          Name:
          <input type="text" value={doctorAccount.name} onChange={e => setDoctorAccount({ ...doctorAccount, name: e.target.value })} />
        </label>
        <label>
          Email:
          <input type="email" value={doctorAccount.email} onChange={e => setDoctorAccount({ ...doctorAccount, email: e.target.value })} />
        </label>
        <button type="submit">Update Account</button>
      </form>
    </div>
  );
};

export default DoctorAccount;