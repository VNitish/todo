import React, { useState, useEffect } from 'react';

const APIKeyForm = ({ mode, selectedKey, onSave, onClose }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: 'User',
    config: '',
    metadata: '',
    permissions: {
      prompts: {
        publish: false,
        delete: false,
        create: false,
        update: false,
        read: false,
        list: false,
        render: false
      },
      configs: {
        create: false,
        update: false,
        delete: false,
        read: false,
        list: false
      },
      guardrails: {
        delete: false,
        update: false,
        create: false,
        read: false,
        list: false
      },
      virtualKeys: {
        create: false,
        update: false,
        delete: false,
        duplicate: false,
        read: false,
        list: false,
        copy: false
      },
      analytics: {
        view: false
      },
      workspaces: {
        read: false,
        update: false,
        list: false
      },
      workspaceServiceApiKeys: {
        create: false,
        delete: false,
        update: false,
        read: false,
        list: false
      },
      workspaceUserApiKeys: {
        create: false,
        delete: false,
        update: false,
        read: false,
        list: false
      },
      workspaceUsers: {
        create: false,
        read: false,
        update: false,
        delete: false,
        list: false
      },
      completions: {
        write: false
      }
    }
  });

  useEffect(() => {
    if (mode === 'edit' && selectedKey) {
      setFormData({
        name: selectedKey.name || '',
        description: selectedKey.description || '',
        type: selectedKey.type || 'User',
        config: selectedKey.config || '',
        metadata: selectedKey.metadata || '',
        permissions: selectedKey.permissions || formData.permissions
      });
    }
  }, [mode, selectedKey]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePermissionChange = (category, permission) => {
    setFormData(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [category]: {
          ...prev.permissions[category],
          [permission]: !prev.permissions[category][permission]
        }
      }
    }));
  };

  const handleSelectAll = () => {
    const newPermissions = { ...formData.permissions };
    Object.keys(newPermissions).forEach(category => {
      Object.keys(newPermissions[category]).forEach(permission => {
        newPermissions[category][permission] = true;
      });
    });
    setFormData(prev => ({ ...prev, permissions: newPermissions }));
  };

  const handleDeselectAll = () => {
    const newPermissions = { ...formData.permissions };
    Object.keys(newPermissions).forEach(category => {
      Object.keys(newPermissions[category]).forEach(permission => {
        newPermissions[category][permission] = false;
      });
    });
    setFormData(prev => ({ ...prev, permissions: newPermissions }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const renderPermissionSection = (title, category, permissions, endpoint) => (
    <div className="permission-section">
      <div className="permission-header">
        <div className="permission-title">
          <span className="permission-icon">
            {category === 'prompts' && '💬'}
            {category === 'configs' && '⚙️'}
            {category === 'guardrails' && '🛡️'}
            {category === 'virtualKeys' && '🔑'}
            {category === 'analytics' && '📊'}
            {category === 'workspaces' && '🏢'}
            {category === 'workspaceServiceApiKeys' && '🔑'}
            {category === 'workspaceUserApiKeys' && '🔑'}
            {category === 'workspaceUsers' && '👥'}
            {category === 'completions' && '✨'}
          </span>
          {title}
        </div>
        {endpoint && <span className="endpoint">{endpoint}</span>}
      </div>
      <div className="permission-checkboxes">
        {Object.keys(permissions).map(permission => (
          <label key={permission} className="permission-checkbox">
            <input
              type="checkbox"
              checked={formData.permissions[category][permission]}
              onChange={() => handlePermissionChange(category, permission)}
            />
            {permission.toUpperCase()}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="api-key-form">
      <div className="form-header">
        <h2>{mode === 'create' ? 'Create New API Key' : 'Update API Key'}</h2>
        <button onClick={onClose} className="close-btn">✕</button>
      </div>

      <div className="form-tabs">
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
          👥 Permissions
        </button>
      </div>

      <form onSubmit={handleSubmit} className="form-content">
        {activeTab === 'details' && (
          <div className="details-tab">
            <div className="form-group">
              <label>API Key Type</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="type"
                    value="Service"
                    checked={formData.type === 'Service'}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                  />
                  Service
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="type"
                    value="User"
                    checked={formData.type === 'User'}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                  />
                  User
                </label>
              </div>
            </div>

            {formData.type === 'User' && (
              <div className="form-group">
                <label>Select User</label>
                <div className="user-select">
                  <div className="selected-user">
                    <span className="user-avatar">N</span>
                    Nitish Naidu
                  </div>
                </div>
              </div>
            )}

            <div className="form-group">
              <label>API Key Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder={mode === 'edit' ? formData.name : 'default_user_key'}
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder={mode === 'edit' ? formData.description : 'Created by portkey on joining organisation'}
                rows="3"
              />
            </div>

            <div className="form-group">
              <label>Config</label>
              <select
                value={formData.config}
                onChange={(e) => handleInputChange('config', e.target.value)}
              >
                <option value="">Select Config</option>
                <option value="default">Default Config</option>
                <option value="production">Production Config</option>
                <option value="development">Development Config</option>
              </select>
            </div>

            <div className="form-group">
              <label>Metadata</label>
              <textarea
                value={formData.metadata}
                onChange={(e) => handleInputChange('metadata', e.target.value)}
                placeholder="Please enter metadata"
                rows="4"
              />
            </div>
          </div>
        )}

        {activeTab === 'permissions' && (
          <div className="permissions-tab">
            <div className="permission-controls">
              <h3>Permission</h3>
              <div className="permission-buttons">
                <button type="button" onClick={handleSelectAll} className="select-all-btn">
                  Select All
                </button>
                <button type="button" onClick={handleDeselectAll} className="deselect-all-btn">
                  Deselect Selection
                </button>
              </div>
            </div>

            <div className="permissions-list">
              {renderPermissionSection('Prompts', 'prompts', formData.permissions.prompts, '/prompts')}
              {renderPermissionSection('Configs', 'configs', formData.permissions.configs, '/configs')}
              {renderPermissionSection('Guardrails', 'guardrails', formData.permissions.guardrails, '/guardrails')}
              {renderPermissionSection('Virtual Keys', 'virtualKeys', formData.permissions.virtualKeys, '/virtual-keys')}
              {renderPermissionSection('Analytics', 'analytics', formData.permissions.analytics, '/analytics')}
              {renderPermissionSection('Workspaces', 'workspaces', formData.permissions.workspaces)}
              {renderPermissionSection('Workspace Service Api Keys', 'workspaceServiceApiKeys', formData.permissions.workspaceServiceApiKeys)}
              {renderPermissionSection('Workspace User Api Keys', 'workspaceUserApiKeys', formData.permissions.workspaceUserApiKeys)}
              {renderPermissionSection('Workspace Users', 'workspaceUsers', formData.permissions.workspaceUsers)}
              {renderPermissionSection('Completions', 'completions', formData.permissions.completions, '/chat/completions /completions /images /audio')}
            </div>
          </div>
        )}

        <div className="form-actions">
          <button type="button" onClick={onClose} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="submit-btn">
            {mode === 'create' ? 'Create' : 'Update'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default APIKeyForm;