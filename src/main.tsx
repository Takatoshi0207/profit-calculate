import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeProvider from './ThemeProvider'
import App from './App'
<<<<<<< HEAD
import './index.css'
import ThemeProvider from './ThemeProvider'
=======
>>>>>>> fad1c5d630c5f773e3dd9e29912bb4758d5fb786

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
