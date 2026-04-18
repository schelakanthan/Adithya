// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Remove loading screen when app is ready
const removeLoadingScreen = () => {
  const loadingElement = document.getElementById('loading');
  if (loadingElement) {
    loadingElement.style.opacity = '0';
    setTimeout(() => {
      loadingElement.remove();
    }, 300);
  }
};

// Use requestIdleCallback for non-critical initialization
const init = () => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  removeLoadingScreen();
};

if ('requestIdleCallback' in window) {
  requestIdleCallback(init, { timeout: 2000 });
} else {
  setTimeout(init, 100);
}