import React, { useState } from 'react';
import APIKeyTable from './APIKeyTable';
import APIKeyForm from './APIKeyForm';

const APIKeysPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPanel, setShowPanel] = useState(false);
  const [panelMode, setPanelMode] = useState('create'); // 'create' or 'edit'
  const [selectedKey, setSelectedKey] = useState(null);
  
  // Sample data
  const [apiKeys, setApiKeys] = useState([
    {
      id: '1',
      name: 'Production API Key',
      key: 'pk_live_51234567890abcdef',
      createdAt: '2024-01-15',
      createdBy: 'john.doe@company.com',
      lastUpdated: '2024-01-15',
      type: 'Service',
      description: 'Main production API key for external integrations',
      config: null,
      metadata: {}
    },
    {
      id: '2',
      name: 'Development Key',
      key: 'pk_test_abcdef1234567890',
      createdAt: '2024-01-10',
      createdBy: 'jane.smith@company.com',
      lastUpdated: '2024-01-12',
      type: 'User',
      description: 'Development environment testing key',
      config: null,
      metadata: {}
    },
    {
      id: '3',
      name: 'Analytics Service',
      key: 'pk_analytics_xyz789456123',
      createdAt: '2023-12-20',
      createdBy: 'admin@company.com',
      lastUpdated: '2024-01-05',
      type: 'Service',
      description: 'Analytics service integration key',
      config: null,
      metadata: {}
    },
    {
      id: '4',
      name: 'Mobile App Key',
      key: 'pk_mobile_qwerty098765',
      createdAt: '2023-11-15',
      createdBy: 'mobile.team@company.com',
      lastUpdated: '2023-12-01',
      type: 'User',
      description: 'Mobile application API access',
      config: null,
      metadata: {}
    }
  ]);

  const handleCreateKey = () => {
    setPanelMode('create');
    setSelectedKey(null);
    setShowPanel(true);
  };

  const handleEditKey = (key) => {
    setPanelMode('edit');
    setSelectedKey(key);
    setShowPanel(true);
  };

  const handleDeleteKey = (keyId) => {
    if (window.confirm('Are you sure you want to delete this API key? This action cannot be undone.')) {
      setApiKeys(apiKeys.filter(key => key.id !== keyId));
    }
  };

  const handleSaveKey = (keyData) => {
    if (panelMode === 'create') {
      const newKey = {
        ...keyData,
        id: Date.now().toString(),
        key: `pk_${keyData.type.toLowerCase()}_${Math.random().toString(36).substr(2, 15)}`,
        createdAt: new Date().toISOString().split('T')[0],
        createdBy: 'current.user@company.com',
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
    setShowPanel(false);
  };

  const filteredKeys = apiKeys.filter(key =>
    key.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    key.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
    key.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    key.createdBy.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="page-content">
        <div className="page-header">
          <h1 className="page-title">API Keys</h1>
        </div>

        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search API keys..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleCreateKey}>
            Create Key
          </button>
        </div>

        <APIKeyTable
          apiKeys={filteredKeys}
          onEdit={handleEditKey}
          onDelete={handleDeleteKey}
        />
      </div>

      <APIKeyForm
        isOpen={showPanel}
        mode={panelMode}
        apiKey={selectedKey}
        onClose={() => setShowPanel(false)}
        onSave={handleSaveKey}
      />
    </>
  );
};

export default APIKeysPage;