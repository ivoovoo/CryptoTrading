import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Portfolio from './pages/Portfolio'
import Menu from './components/Menu'
import MenuButtom from './components/MenuButtom'
import Academy from './pages/Academy'
import Watchlist from './pages/Watchlist'
import Trading from './pages/Trading'

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<Navigate to='/Dashboard' replace />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Watchlist' element={<Watchlist />} />
        <Route path='/Academy' element={<Academy />} />
        <Route path='/Trading' element={<Trading />} />
      </Routes>
      <MenuButtom />
    </Router>
  )
}

export default App
