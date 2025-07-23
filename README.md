# React Todo List Application

A simple, elegant todo list web application built with React featuring a clean minimal design, dark/light mode toggle, and smooth animations.

## Features

- ✅ Add new todo items
- ✅ Mark items as completed with smooth animations
- ✅ Delete items from the list with hover effects
- ✅ Light/Dark mode toggle with persistent theme
- ✅ Local storage persistence
- ✅ Responsive design for mobile and desktop
- ✅ Clean, minimal UI with smooth transitions
- ✅ Completion progress tracking

## How to Run

### Option 1: Simple HTML Server
1. Open `index.html` in a web browser directly, or
2. Use a simple HTTP server:
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   
   # Using Node.js serve (if installed)
   npx serve .
   
   # Then open http://localhost:8000 in your browser
   ```

### Option 2: Using npm
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser to the URL shown in the terminal (usually http://localhost:3000)

## Usage

1. **Adding Todos**: Type in the input field and press Enter or click the "Add" button
2. **Completing Todos**: Click the checkbox next to any todo item to mark it as complete
3. **Deleting Todos**: Click the "×" button to remove a todo item
4. **Theme Toggle**: Click the sun/moon icon in the header to switch between light and dark modes
5. **Progress Tracking**: View your completion progress in the stats section

## File Structure

```
├── App.jsx          # Main application component
├── TodoItem.jsx     # Individual todo item component
├── App.css          # All styling including themes and animations
├── index.html       # HTML entry point
├── package.json     # Dependencies and scripts
└── README.md        # This file
```

## Features in Detail

### Animations
- Slide-in animation when new todos are added
- Checkbox scaling and color change when completed
- Strikethrough animation for completed text
- Delete button hover effects with rotation
- Smooth theme transitions

### Responsive Design
- Mobile-first approach
- Flexible layout that works on all screen sizes
- Touch-friendly buttons and interactions

### Accessibility
- Proper ARIA labels for screen readers
- Keyboard navigation support
- High contrast colors in both themes
- Focus indicators for all interactive elements

### Data Persistence
- Todos are automatically saved to browser's local storage
- Theme preference is remembered between sessions
- No data loss on page refresh

## Browser Support

Works in all modern browsers including:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use this code for your own projects!