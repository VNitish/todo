import React from 'react';

const APIKeyTable = ({ apiKeys, onEdit, onDelete }) => {
  if (apiKeys.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">🔑</div>
        <div className="empty-state-text">No API keys found</div>
        <div className="empty-state-subtext">Create your first API key to get started</div>
      </div>
    );
  }

  return (
    <div className="data-table">
      <table className="table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>KEY</th>
            <th>CREATED AT</th>
            <th>CREATED BY</th>
            <th>LAST UPDATED</th>
            <th>TYPE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {apiKeys.map((apiKey) => (
            <tr key={apiKey.id}>
              <td>
                <div className="key-name">{apiKey.name}</div>
              </td>
              <td>
                <span className="key-value">{apiKey.key}</span>
              </td>
              <td>{apiKey.createdAt}</td>
              <td>{apiKey.createdBy}</td>
              <td>{apiKey.lastUpdated}</td>
              <td>
                <span className={`type-badge ${apiKey.type.toLowerCase()}`}>
                  {apiKey.type}
                </span>
              </td>
              <td>
                <div className="actions">
                  <button 
                    className="btn btn-icon" 
                    onClick={() => onEdit(apiKey)}
                    title="Edit"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </button>
                  <button 
                    className="btn btn-icon" 
                    onClick={() => onDelete(apiKey.id)}
                    title="Delete"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 6h18" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default APIKeyTable;