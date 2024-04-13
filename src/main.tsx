import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/SFProFont.css'
import './styles/global.scss'
import './styles/chip-grid.scss'
import './styles/chip-frame.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
