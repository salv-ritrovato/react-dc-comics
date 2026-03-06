import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Bootstrap imported
import 'bootstrap/dist/css/bootstrap.min.css'
// Font imported from FontSource
import '@fontsource-variable/open-sans';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
