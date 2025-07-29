# React API Keys Management App

A modern, single-page React application for comprehensive API key management with a clean sidebar navigation and intuitive user interface.

![API Keys Management App](https://img.shields.io/badge/React-18.2.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## Features

### 🎨 Modern UI/UX
- Clean, minimalist design with white and grey color palette
- Fixed sidebar navigation (250px width)
- Responsive layout that adapts to different screen sizes
- Smooth hover effects and transitions

### 🔑 API Key Management
- **Create New Keys**: Comprehensive form with API key details and permissions
- **Edit Existing Keys**: Update key information and permissions
- **Delete Keys**: Safe deletion with confirmation dialogs
- **Search & Filter**: Real-time search across key names, values, and creators
- **Type Management**: Support for User and Admin key types

### 👤 User Interface
- **Sidebar Navigation**: 
  - Zupee branding at the top
  - API Keys navigation item
  - User profile access at the bottom
- **Data Table**: Clean table with columns for NAME, KEY, CREATED AT, CREATED BY, LAST UPDATED, TYPE
- **Right-side Panel**: Slide-out form for creating and editing keys
- **Profile Modal**: User profile information and actions

### 🛡️ Permissions System
Comprehensive permission management across multiple categories:
- **Prompts**: PUBLISH, DELETE, CREATE, UPDATE, READ, LIST, RENDER
- **Configs**: CREATE, UPDATE, DELETE, READ, LIST
- **Guardrails**: DELETE, UPDATE, CREATE, READ, LIST
- **Virtual Keys**: CREATE, UPDATE, DELETE, DUPLICATE, READ, LIST, COPY
- **Analytics**: VIEW
- **Workspaces**: READ, UPDATE, LIST
- **Workspace Service API Keys**: CREATE, DELETE, UPDATE, READ, LIST
- **Workspace User API Keys**: CREATE, DELETE, UPDATE, READ, LIST
- **Workspace Users**: CREATE, READ, UPDATE, DELETE, LIST
- **Completions**: WRITE

## File Structure

```
src/
├── components/
│   ├── Sidebar.jsx              # Left sidebar with navigation
│   ├── APIKeysPage.jsx          # Main page component
│   ├── APIKeyTable.jsx          # Data table component
│   ├── APIKeyForm.jsx           # Create/Edit form component
│   └── ProfileModal.jsx         # User profile modal
├── App.jsx                      # Main application component
├── App.css                      # Application styles
└── index.html                   # HTML entry point
```

## Technology Stack

- **React 18.2.0**: Modern React with hooks
- **CSS3**: Custom styling with modern CSS features
- **JavaScript ES6+**: Modern JavaScript features
- **HTML5**: Semantic HTML structure

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-api-keys-management
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Start the development server on port 3000
- `npm run dev` - Start the development server on port 8080
- `npm run start:5000` - Start the server on port 5000
- `npm run start:4000` - Start the server on port 4000
- `npm run serve` - Start the server on default port

## Usage

### Creating API Keys

1. Click the "Create Key" button in the search section
2. Fill in the API Key Details:
   - Select API Key Type (Service or User)
   - Enter API Key Name
   - Add Description
   - Select Config (optional)
   - Add Metadata (optional)
3. Switch to the Permissions tab
4. Select appropriate permissions for different categories
5. Click "Create" to save the new API key

### Editing API Keys

1. Click the edit button (✏️) in the Actions column
2. Modify the key details or permissions
3. Click "Update" to save changes

### Deleting API Keys

1. Click the delete button (🗑️) in the Actions column
2. Confirm the deletion in the dialog
3. The key will be permanently removed

### Searching API Keys

- Use the search input to filter keys by name, key value, or creator
- Results update in real-time as you type

### User Profile

- Click on "nitish naidu" in the sidebar footer
- View profile information
- Access profile editing and logout options

## Sample Data

The application comes with 4 sample API keys demonstrating different types and use cases:

1. **Production API Key** - Main production environment key
2. **Development Key** - Development and testing purposes
3. **Analytics Key** - Read-only analytics access
4. **Mobile App Key** - Mobile application integration

## Responsive Design

The application is fully responsive and adapts to different screen sizes:

- **Desktop**: Full sidebar with labels and complete functionality
- **Tablet**: Reduced sidebar width with maintained functionality
- **Mobile**: Collapsed sidebar with icons only

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with React 18
- Inspired by modern admin dashboard designs
- Uses system fonts for optimal performance