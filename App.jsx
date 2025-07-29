import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import APIKeysPage from './components/APIKeysPage';
import ProfileModal from './components/ProfileModal';

function App() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showAPIKeyForm, setShowAPIKeyForm] = useState(false);
  const [formMode, setFormMode] = useState('create'); // 'create' or 'edit'
  const [selectedKey, setSelectedKey] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample API keys data
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      name: 'Production API Key',
      key: 'pk_live_51H7...',
      createdAt: '2024-01-15',
      createdBy: 'nitish naidu',
      lastUpdated: '2024-01-20',
      type: 'User',
      description: 'Main production environment key',
      permissions: ['READ', 'WRITE', 'DELETE']
    },
    {
      id: 2,
      name: 'Development Key',
      key: 'pk_test_51H8...',
      createdAt: '2024-01-10',
      createdBy: 'admin',
      lastUpdated: '2024-01-18',
      type: 'Admin',
      description: 'Development and testing purposes',
      permissions: ['READ', 'WRITE']
    },
    {
      id: 3,
      name: 'Analytics Key',
      key: 'pk_analytics_51H9...',
      createdAt: '2024-01-05',
      createdBy: 'nitish naidu',
      lastUpdated: '2024-01-12',
      type: 'User',
      description: 'Read-only analytics access',
      permissions: ['READ']
    },
    {
      id: 4,
      name: 'Mobile App Key',
      key: 'pk_mobile_51H10...',
      createdAt: '2024-01-08',
      createdBy: 'nitish naidu',
      lastUpdated: '2024-01-25',
      type: 'User',
      description: 'Mobile application integration',
      permissions: ['READ', 'WRITE']
    }
  ]);

  const handleCreateKey = () => {
    setFormMode('create');
    setSelectedKey(null);
    setShowAPIKeyForm(true);
  };

  const handleEditKey = (key) => {
    setFormMode('edit');
    setSelectedKey(key);
    setShowAPIKeyForm(true);
  };

  const handleDeleteKey = (keyId) => {
    if (window.confirm('Are you sure you want to delete this API key? This action cannot be undone.')) {
      setApiKeys(apiKeys.filter(key => key.id !== keyId));
    }
  };

  const handleSaveKey = (keyData) => {
    if (formMode === 'create') {
      const newKey = {
        ...keyData,
        id: Math.max(...apiKeys.map(k => k.id)) + 1,
        createdAt: new Date().toISOString().split('T')[0],
        createdBy: 'nitish naidu',
        lastUpdated: new Date().toISOString().split('T')[0]
      };
      setApiKeys([...apiKeys, newKey]);
    } else {
      setApiKeys(apiKeys.map(key => 
        key.id === selectedKey.id 
          ? { ...key, ...keyData, lastUpdated: new Date().toISOString().split('T')[0] }
          : key
      ));
    }
    setShowAPIKeyForm(false);
  };

  const filteredKeys = apiKeys.filter(key =>
    key.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    key.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
    key.createdBy.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Sidebar onProfileClick={() => setShowProfileModal(true)} />
      
      <main className="main-content">
        <APIKeysPage
          apiKeys={filteredKeys}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onCreateKey={handleCreateKey}
          onEditKey={handleEditKey}
          onDeleteKey={handleDeleteKey}
          showForm={showAPIKeyForm}
          formMode={formMode}
          selectedKey={selectedKey}
          onSaveKey={handleSaveKey}
          onCloseForm={() => setShowAPIKeyForm(false)}
        />
      </main>

      {showProfileModal && (
        <ProfileModal onClose={() => setShowProfileModal(false)} />
      )}
    </div>
  );
}

export default App;
