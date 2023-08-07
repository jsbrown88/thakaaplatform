import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrainingInfo = () => {
  const [trainingInfo, setTrainingInfo] = useState([]);
  const [licenseInfo, setLicenseInfo] = useState([]);

  useEffect(() => {
    getTrainingInfo();
    getLicenseInfo();
  }, []);

  const getTrainingInfo = async () => {
    try {
      const response = await axios.get('/api/training');
      setTrainingInfo(response.data);
    } catch (error) {
      console.error(`Error fetching training info: ${error}`);
    }
  };

  const getLicenseInfo = async () => {
    try {
      const response = await axios.get('/api/license');
      setLicenseInfo(response.data);
    } catch (error) {
      console.error(`Error fetching license info: ${error}`);
    }
  };

  return (
    <div className="training-info-container">
      <h2>Training Information</h2>
      {trainingInfo.map((info, index) => (
        <div key={index} className="training-info">
          <h3>{info.title}</h3>
          <p>{info.description}</p>
        </div>
      ))}
      <h2>License Information</h2>
      {licenseInfo.map((info, index) => (
        <div key={index} className="license-info">
          <h3>{info.title}</h3>
          <p>{info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TrainingInfo;