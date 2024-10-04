import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RouteConfig from './components/Routes'; // Update the import statement

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouteConfig />
  </React.StrictMode>,
)