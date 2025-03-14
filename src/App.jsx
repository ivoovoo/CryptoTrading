import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import './App2.css'
import Dashboard from './pages/Dashboard'
import Portfolio from './pages/Portfolio'
import MenuButtom from './components/MenuButtom'
import Academy from './pages/Academy'
import Watchlist from './pages/Watchlist'
import Trading from './pages/Trading'
import HomeBlockchain from './pages/HomeBlockchain'
import Second from './pages/Second'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/Dashboard' replace />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Watchlist' element={<Watchlist />} />
        <Route path='/Academy' element={<Academy />} />
        <Route path='/Trading' element={<Trading />} />
        <Route path='/second' element={<Second />} />
        <Route path='/home' element={<HomeBlockchain />} />
        <Route path='/second' element={<Second />} />
      </Routes>
    </Router>
  )
}

export default App
