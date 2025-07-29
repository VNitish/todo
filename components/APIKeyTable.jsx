import React from 'react';

const APIKeyTable = ({ apiKeys, onEditKey, onDeleteKey }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const truncateKey = (key) => {
    if (key.length > 20) {
      return `${key.substring(0, 12)}...${key.substring(key.length - 4)}`;
    }
    return key;
  };

  return (
    <div className="table-wrapper">
      <table className="api-keys-table">
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
          {apiKeys.length === 0 ? (
            <tr>
              <td colSpan="7" className="no-data">
                No API keys found
              </td>
            </tr>
          ) : (
            apiKeys.map((key) => (
              <tr key={key.id}>
                <td className="key-name">{key.name}</td>
                <td className="key-value">
                  <code>{truncateKey(key.key)}</code>
                </td>
                <td>{formatDate(key.createdAt)}</td>
                <td>{key.createdBy}</td>
                <td>{formatDate(key.lastUpdated)}</td>
                <td>
                  <span className={`type-badge ${key.type.toLowerCase()}`}>
                    {key.type}
                  </span>
                </td>
                <td className="actions">
                  <button
                    onClick={() => onEditKey(key)}
                    className="action-btn edit-btn"
                    title="Edit API Key"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => onDeleteKey(key.id)}
                    className="action-btn delete-btn"
                    title="Delete API Key"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default APIKeyTable;