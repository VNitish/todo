import React from 'react';

const Sidebar = ({ onProfileClick }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <h2>zupee</h2>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li className="nav-item active">
            <a href="#" className="nav-link">
              <span className="nav-icon">🔑</span>
              API Keys
            </a>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile" onClick={onProfileClick}>
          <div className="user-avatar">
            <span>N</span>
          </div>
          <div className="user-info">
            <span className="user-name">nitish naidu</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;