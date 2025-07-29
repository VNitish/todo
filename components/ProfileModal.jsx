import React from 'react';

const ProfileModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>User Profile</h2>
          <button onClick={onClose} className="close-btn">✕</button>
        </div>
        
        <div className="profile-content">
          <div className="profile-avatar-section">
            <div className="profile-avatar-large">
              <span>N</span>
            </div>
            <h3>Nitish Naidu</h3>
            <p className="profile-email">nitish.naidu@zupee.com</p>
          </div>
          
          <div className="profile-details">
            <div className="detail-row">
              <span className="detail-label">Role:</span>
              <span className="detail-value">Developer</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Department:</span>
              <span className="detail-value">Engineering</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Joined:</span>
              <span className="detail-value">January 2024</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Last Login:</span>
              <span className="detail-value">Today, 2:30 PM</span>
            </div>
          </div>
          
          <div className="profile-actions">
            <button className="profile-btn edit-profile-btn">
              Edit Profile
            </button>
            <button className="profile-btn logout-btn">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;