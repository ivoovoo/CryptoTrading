import React from 'react'
import { Link } from 'react-router-dom'
import './MenuBottom.css'

const MenuBottom2 = () => {
  return (
    <div className='menu-bottom'>
      <div className='menu-content'>
        <div className='menu-bottom-button'>
          <Link to='/second' className='menu-bottom-link'>
            BLOCKS
          </Link>
        </div>
        <div className='menu-bottom-button'>
          <Link to='/home' className='menu-bottom-link'>
            CHAINS
          </Link>
        </div>
        <div className='menu-bottom-button'>
          <Link to='/home' className='menu-bottom-link'>
            TRANSFERS
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MenuBottom2
