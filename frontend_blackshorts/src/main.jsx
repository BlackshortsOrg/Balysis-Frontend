import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import FilterContextProvider from './Context/FilterContext.jsx'
import SearchContextProvider from './Context/SearchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilterContextProvider>
    <SearchContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </SearchContextProvider>
    </FilterContextProvider>
  </React.StrictMode>,
)
