import React from 'react';

const ProfileModal = ({ onClose }) => {
  const userInfo = {
    name: 'Nitish Naidu',
    email: 'nitish.naidu@company.com',
    role: 'Administrator',
    department: 'Engineering',
    joinedDate: 'January 15, 2023',
    lastActive: '2 hours ago'
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">User Profile</h2>
        </div>
        
        <div className="modal-body">
          <div className="profile-header">
            <div className="profile-avatar">NN</div>
            <h3 className="profile-name">{userInfo.name}</h3>
            <p className="profile-email">{userInfo.email}</p>
          </div>
          
          <div className="profile-info">
            <div className="info-item">
              <span className="info-label">Role</span>
              <span className="info-value">{userInfo.role}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Department</span>
              <span className="info-value">{userInfo.department}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Joined</span>
              <span className="info-value">{userInfo.joinedDate}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Last Active</span>
              <span className="info-value">{userInfo.lastActive}</span>
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;