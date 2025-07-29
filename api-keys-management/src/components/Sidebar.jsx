import React from 'react';

const Sidebar = ({ currentPage, onPageChange, onUserClick }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">zupee</div>
      </div>
      
      <nav className="sidebar-nav">
        <div 
          className={`nav-item ${currentPage === 'api-keys' ? 'active' : ''}`}
          onClick={() => onPageChange('api-keys')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
          </svg>
          API Keys
        </div>
      </nav>
      
      <div className="sidebar-footer" onClick={onUserClick}>
        <div className="user-info">
          <div className="user-avatar">NN</div>
          <div>
            <div style={{ fontWeight: 500 }}>nitish naidu</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;