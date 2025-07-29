# API Keys Management Application

A modern, single-page React application for managing API keys with a clean sidebar navigation and comprehensive permissions system.

## Features

### 🎨 Modern UI/UX
- Clean, minimalist design with white and grey color palette
- Fixed sidebar navigation with user profile section
- Responsive layout that works on desktop and mobile devices
- Smooth animations and transitions

### 🔑 API Key Management
- **Create API Keys**: Support for both Service and User type keys
- **Edit Existing Keys**: Update key details and permissions
- **Delete Keys**: Remove keys with confirmation dialog
- **Search Functionality**: Filter keys by name, key value, type, or creator

### 📋 Comprehensive Permissions System
- Granular permission controls for various API endpoints
- Select/Deselect all functionality
- Organized permission groups:
  - Workspaces
  - API Keys (Service & User)
  - Workspace Users
  - Completions
  - Prompts
  - Configs
  - Guardrails
  - Virtual Keys
  - Analytics
  - Logs

### 👤 User Profile
- Click on username in sidebar to view profile
- Displays user information including role, department, and activity

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd api-keys-management
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx          # Navigation sidebar component
│   ├── APIKeysPage.jsx      # Main API keys listing page
│   ├── APIKeyTable.jsx      # Table component for displaying keys
│   ├── APIKeyForm.jsx       # Form for creating/editing keys
│   └── ProfileModal.jsx     # User profile modal
├── App.js                   # Main application component
├── App.css                  # Global styles
└── index.js                 # Application entry point
```

## Usage

### Creating a New API Key
1. Click the "Create Key" button in the top-right corner
2. Select the key type (Service or User)
3. Fill in the required details:
   - API Key Name
   - Description
   - Config (optional)
   - Metadata (optional JSON)
4. Switch to the Permissions tab to set access controls
5. Click "Create" to save the new key

### Editing an Existing Key
1. Click the edit (pencil) icon in the Actions column
2. Update the desired fields
3. Modify permissions as needed
4. Click "Update" to save changes

### Deleting a Key
1. Click the delete (trash) icon in the Actions column
2. Confirm the deletion in the popup dialog

### Searching for Keys
- Use the search bar to filter keys by:
  - Key name
  - Key value
  - Type (User/Service)
  - Creator email

## Component Details

### Sidebar Component
- Displays application branding
- Shows navigation items (currently only API Keys)
- User profile section at the bottom

### APIKeysPage Component
- Main container for the API keys feature
- Manages state for all API keys
- Handles search functionality
- Controls the side panel for create/edit operations

### APIKeyTable Component
- Displays API keys in a tabular format
- Shows key details: name, value, dates, creator, type
- Provides edit and delete actions for each key

### APIKeyForm Component
- Dual-tab interface:
  - **Details Tab**: Key configuration fields
  - **Permissions Tab**: Access control settings
- Supports both create and edit modes
- Form validation and data handling

### ProfileModal Component
- Displays user information in a modal overlay
- Shows role, department, join date, and last activity

## Styling

The application uses a custom CSS design system with:
- Consistent spacing and typography
- Hover effects and transitions
- Responsive breakpoints for mobile devices
- Utility classes for common patterns

## Future Enhancements

- Backend API integration
- Real-time updates using WebSockets
- Export/Import functionality
- API key rotation features
- Usage analytics and monitoring
- Multi-factor authentication for sensitive operations
- Audit logs for all key operations

## License

This project is licensed under the MIT License.
