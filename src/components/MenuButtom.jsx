import React from 'react'
import './MenuBottom.css'

const MenuButtom = () => {
  return (
    <div>
      <div className='menu-bottom'>
        <div className='menu-content'>
          <div className='menu-bottom-button'>
            <a href='#' className='menu-bottom-link'>
              TOP
            </a>
          </div>
          <div className='menu-bottom-button'>
            <a href='#' className='menu-bottom-link'>
              MY COINS
            </a>
          </div>
          <div className='menu-bottom-button'>
            <a href='#' className='menu-bottom-link'>
              EDU
            </a>
          </div>
          <div className='menu-bottom-button'>
            <a href='#' className='menu-bottom-link'>
              NEWS
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuButtom
