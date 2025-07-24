#!/bin/bash

# Default port
PORT=${1:-8080}

echo "🚀 Starting Sleek Todo App on port $PORT..."
echo "📱 Open your browser to: http://localhost:$PORT"
echo "⏹️  Press Ctrl+C to stop the server"
echo ""

# Start the server
npx serve . -p $PORT