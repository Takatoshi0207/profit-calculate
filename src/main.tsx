import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './ThemeProvider'
import App from './App'
import Head from './components/Head'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Head title='美バリ｜シュミレーション' />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
