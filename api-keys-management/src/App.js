import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import APIKeysPage from './components/APIKeysPage';
import ProfileModal from './components/ProfileModal';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [currentPage, setCurrentPage] = useState('api-keys');

  const handleUserClick = () => {
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  return (
    <div className="app">
      <Sidebar 
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onUserClick={handleUserClick}
      />
      
      <div className="main-content">
        {currentPage === 'api-keys' && <APIKeysPage />}
      </div>

      {showProfile && (
        <ProfileModal onClose={handleCloseProfile} />
      )}
    </div>
  );
}

export default App;
