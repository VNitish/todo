import React from 'react';
import APIKeyTable from './APIKeyTable';
import APIKeyForm from './APIKeyForm';

const APIKeysPage = ({
  apiKeys,
  searchQuery,
  onSearchChange,
  onCreateKey,
  onEditKey,
  onDeleteKey,
  showForm,
  formMode,
  selectedKey,
  onSaveKey,
  onCloseForm
}) => {
  return (
    <div className="api-keys-page">
      <div className="page-header">
        <h1>API Keys</h1>
      </div>

      <div className="search-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search API keys..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
          <button onClick={onCreateKey} className="create-key-btn">
            Create Key
          </button>
        </div>
      </div>

      <div className="table-container">
        <APIKeyTable
          apiKeys={apiKeys}
          onEditKey={onEditKey}
          onDeleteKey={onDeleteKey}
        />
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="form-panel">
            <APIKeyForm
              mode={formMode}
              selectedKey={selectedKey}
              onSave={onSaveKey}
              onClose={onCloseForm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default APIKeysPage;