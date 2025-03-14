import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const menuItems = [
    { name: 'Dashboard', img: '/img/menu.svg', path: '/Dashboard' },
    { name: 'Portfolio', img: '/img/activity.svg', path: '/Portfolio' },
    { name: 'Trading', img: '/img/trade.svg', path: '/Trading' },
    { name: 'Watchlist', img: '/img/eye.svg', path: '/Watchlist' },
    { name: 'Academy', img: '/img/book.svg', path: '/Academy' },
    { name: 'Profile', img: '/img/user.svg', path: '/Second' },
    { name: 'Wallet', img: '/img/wallet-2.svg', path: '/Home' },
  ]

  return (
    <>
      <button className='burger-menu' onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? 'burger-line open' : 'burger-line'}></span>
        <span className={isOpen ? 'burger-line open' : 'burger-line'}></span>
        <span className={isOpen ? 'burger-line open' : 'burger-line'}></span>
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <img className='logo' src='/img/logo.svg' alt='Logo' />

        {/* Инпут будет внутри меню, если экран <= 768px */}
        {isMobile && (
          <div className='search-block'>
            <input className='search-input' type='text' placeholder='Search your coins...' />
            <button className='search-button'>
              <img src='/img/search.svg' className='search-img' alt='' />
            </button>
          </div>
        )}

        <nav className='menu'>
          {menuItems.map(item => (
            <NavLink
              to={item.path}
              key={item.name}
              className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {({ isActive }) => (
                <>
                  <div className={isActive ? 'active-board-img' : 'board-img'}>
                    <img src={item.img} alt={item.name} />
                  </div>
                  <span>{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className='bottom-menu'>
          <div className='menu-item' onClick={() => setIsOpen(false)}>
            <img className='logout-img' src='/img/logout.svg' alt='Logout' />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
