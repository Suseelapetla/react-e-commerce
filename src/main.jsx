import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './server.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/react-e-commerce'>
    <App />
  </BrowserRouter>,
)
