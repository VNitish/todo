import React, { useState, useEffect } from 'react';

const APIKeyForm = ({ isOpen, mode, apiKey, onClose, onSave }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [formData, setFormData] = useState({
    name: '',
    type: 'User',
    description: '',
    config: '',
    metadata: '',
    user: 'Nitish Naidu'
  });

  const [permissions, setPermissions] = useState({
    workspaces: { read: false, update: false, list: false },
    workspaceServiceApiKeys: { create: false, delete: false, update: false, read: false, list: false },
    workspaceUserApiKeys: { create: false, delete: false, update: false, read: false, list: false },
    workspaceUsers: { create: false, read: false, update: false, delete: false, list: false },
    completions: { write: false },
    prompts: { publish: false, delete: false, create: false, update: false, read: false, list: false, render: false },
    configs: { create: false, update: false, delete: false, read: false, list: false },
    guardrails: { delete: false, update: false, create: false, read: false, list: false },
    virtualKeys: { create: false, update: false, delete: false, duplicate: false, read: false, list: false, copy: false },
    analytics: { view: false },
    logs: { read: false, list: false }
  });

  useEffect(() => {
    if (mode === 'edit' && apiKey) {
      setFormData({
        name: apiKey.name || '',
        type: apiKey.type || 'User',
        description: apiKey.description || '',
        config: apiKey.config || '',
        metadata: apiKey.metadata ? JSON.stringify(apiKey.metadata, null, 2) : '',
        user: apiKey.user || 'Nitish Naidu'
      });
      // In a real app, you'd load permissions from the API key
    } else {
      // Reset form for create mode
      setFormData({
        name: '',
        type: 'User',
        description: '',
        config: '',
        metadata: '',
        user: 'Nitish Naidu'
      });
      // Reset permissions
      setPermissions({
        workspaces: { read: false, update: false, list: false },
        workspaceServiceApiKeys: { create: false, delete: false, update: false, read: false, list: false },
        workspaceUserApiKeys: { create: false, delete: false, update: false, read: false, list: false },
        workspaceUsers: { create: false, read: false, update: false, delete: false, list: false },
        completions: { write: false },
        prompts: { publish: false, delete: false, create: false, update: false, read: false, list: false, render: false },
        configs: { create: false, update: false, delete: false, read: false, list: false },
        guardrails: { delete: false, update: false, create: false, read: false, list: false },
        virtualKeys: { create: false, update: false, delete: false, duplicate: false, read: false, list: false, copy: false },
        analytics: { view: false },
        logs: { read: false, list: false }
      });
    }
  }, [mode, apiKey]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePermissionChange = (section, permission) => {
    setPermissions(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [permission]: !prev[section][permission]
      }
    }));
  };

  const handleSelectAll = (section) => {
    const allChecked = Object.values(permissions[section]).every(val => val);
    const newValue = !allChecked;
    
    setPermissions(prev => ({
      ...prev,
      [section]: Object.keys(prev[section]).reduce((acc, key) => {
        acc[key] = newValue;
        return acc;
      }, {})
    }));
  };

  const handleSelectAllGlobal = () => {
    const allChecked = Object.values(permissions).every(section => 
      Object.values(section).every(val => val)
    );
    const newValue = !allChecked;
    
    const newPermissions = {};
    Object.keys(permissions).forEach(section => {
      newPermissions[section] = {};
      Object.keys(permissions[section]).forEach(permission => {
        newPermissions[section][permission] = newValue;
      });
    });
    
    setPermissions(newPermissions);
  };

  const handleDeselectAll = () => {
    const newPermissions = {};
    Object.keys(permissions).forEach(section => {
      newPermissions[section] = {};
      Object.keys(permissions[section]).forEach(permission => {
        newPermissions[section][permission] = false;
      });
    });
    
    setPermissions(newPermissions);
  };

  const handleSubmit = () => {
    const metadata = formData.metadata ? JSON.parse(formData.metadata || '{}') : {};
    onSave({
      ...formData,
      metadata,
      permissions
    });
  };

  const renderPermissionSection = (title, sectionKey, path, permissionList) => (
    <div className="permission-section">
      <div className="permission-header">
        <span className="permission-title">{title}</span>
        <span className="permission-path">{path}</span>
      </div>
      <div className="permissions-grid">
        {permissionList.map(permission => (
          <div key={permission} className="permission-item">
            <input
              type="checkbox"
              id={`${sectionKey}-${permission}`}
              className="permission-checkbox"
              checked={permissions[sectionKey][permission]}
              onChange={() => handlePermissionChange(sectionKey, permission)}
            />
            <label 
              htmlFor={`${sectionKey}-${permission}`}
              className="permission-label"
            >
              {permission.toUpperCase()}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`side-panel ${isOpen ? 'open' : ''}`}>
      <div className="panel-header">
        <h2 className="panel-title">
          {mode === 'create' ? 'Create New API Key' : 'Update API Key'}
        </h2>
        <button className="panel-close" onClick={onClose}>
          ×
        </button>
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'details' ? 'active' : ''}`}
          onClick={() => setActiveTab('details')}
        >
          🔑 API Key Details
        </button>
        <button 
          className={`tab ${activeTab === 'permissions' ? 'active' : ''}`}
          onClick={() => setActiveTab('permissions')}
        >
          👤 Permissions
        </button>
      </div>

      <div className="panel-content">
        {activeTab === 'details' ? (
          <>
            <div className="form-group">
              <label className="form-label">API Key Type</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="type"
                    value="Service"
                    checked={formData.type === 'Service'}
                    onChange={handleInputChange}
                  />
                  Service
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="type"
                    value="User"
                    checked={formData.type === 'User'}
                    onChange={handleInputChange}
                  />
                  User
                </label>
              </div>
            </div>

            {formData.type === 'User' && (
              <div className="form-group">
                <label className="form-label">Select User</label>
                <div style={{ 
                  padding: '10px 16px', 
                  border: '1px solid #e0e0e0', 
                  borderRadius: '6px',
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#4a9eff',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    N
                  </div>
                  {formData.user}
                </div>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">API Key Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder={mode === 'edit' ? formData.name : "Enter API key name"}
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                className="form-textarea"
                placeholder={mode === 'edit' ? formData.description : "Enter description"}
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Config</label>
              <select 
                name="config" 
                className="form-select"
                value={formData.config}
                onChange={handleInputChange}
              >
                <option value="">Select Config</option>
                <option value="config1">Config 1</option>
                <option value="config2">Config 2</option>
                <option value="config3">Config 3</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Metadata</label>
              <textarea
                name="metadata"
                className="form-textarea"
                placeholder="Please enter metadata"
                value={formData.metadata}
                onChange={handleInputChange}
                style={{ minHeight: '120px', fontFamily: 'monospace' }}
              />
            </div>
          </>
        ) : (
          <>
            <div className="permission-controls">
              <h3 style={{ margin: 0, fontSize: '16px' }}>Permission</h3>
              <div className="permission-actions">
                <button className="permission-btn" onClick={handleSelectAllGlobal}>
                  Select All
                </button>
                <button className="permission-btn" onClick={handleDeselectAll}>
                  Deselect Selection
                </button>
              </div>
            </div>

            {renderPermissionSection('🏢 Workspaces', 'workspaces', '', ['read', 'update', 'list'])}
            {renderPermissionSection('🔑 Workspace Service Api Keys', 'workspaceServiceApiKeys', '', ['create', 'delete', 'update', 'read', 'list'])}
            {renderPermissionSection('🔑 Workspace User Api Keys', 'workspaceUserApiKeys', '', ['create', 'delete', 'update', 'read', 'list'])}
            {renderPermissionSection('👥 Workspace Users', 'workspaceUsers', '', ['create', 'read', 'update', 'delete', 'list'])}
            {renderPermissionSection('✅ Completions', 'completions', '/chat/completions /completions /images /audio', ['write'])}
            {renderPermissionSection('📋 Prompts', 'prompts', '/prompts', ['publish', 'delete', 'create', 'update', 'read', 'list', 'render'])}
            {renderPermissionSection('⚙️ Configs', 'configs', '/configs', ['create', 'update', 'delete', 'read', 'list'])}
            {renderPermissionSection('🛡️ Guardrails', 'guardrails', '/guardrails', ['delete', 'update', 'create', 'read', 'list'])}
            {renderPermissionSection('🔑 Virtual Keys', 'virtualKeys', '/virtual-keys', ['create', 'update', 'delete', 'duplicate', 'read', 'list', 'copy'])}
            {renderPermissionSection('📊 Analytics', 'analytics', '/analytics', ['view'])}
            {renderPermissionSection('📋 Logs', 'logs', '/logs', ['read', 'list'])}
          </>
        )}
      </div>

      <div className="panel-footer">
        <button className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>
        <button className="btn btn-primary" onClick={handleSubmit}>
          {mode === 'create' ? 'Create' : 'Update'}
        </button>
      </div>
    </div>
  );
};

export default APIKeyForm;