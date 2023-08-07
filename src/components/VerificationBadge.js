import React, { useState } from 'react';
import axios from 'axios';

const VerificationBadge = () => {
  const [verificationStatus, setVerificationStatus] = useState(false);
  const [verificationForm, setVerificationForm] = useState({
    id: '',
    document: null,
  });

  const handleInputChange = (event) => {
    setVerificationForm({
      ...verificationForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setVerificationForm({
      ...verificationForm,
      document: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('id', verificationForm.id);
    formData.append('document', verificationForm.document);

    try {
      const response = await axios.post('/api/verification', formData);
      if (response.data.success) {
        setVerificationStatus(true);
      }
    } catch (error) {
      console.error('Error during verification:', error);
    }
  };

  return (
    <div>
      <h2>Verification</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={verificationForm.id}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Document:
          <input type="file" name="document" onChange={handleFileChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {verificationStatus && <div className="verification-badge">Verified</div>}
    </div>
  );
};

export default VerificationBadge;