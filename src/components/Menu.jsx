import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [touchStartX, setTouchStartX] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    const handleClickOutside = event => {
      // Добавим проверку, чтобы не закрывать меню, если клик был внутри меню или бургер-меню
      if (isOpen && !event.target.closest('.sidebar') && !event.target.closest('.burger-menu')) {
        setIsOpen(false)
      }
    }

    const handleTouchStart = event => {
      // Проверим, что свайп начинается в области меню или на бургер-меню
      if (event.target.closest('.sidebar') || event.target.closest('.burger-menu')) {
        setTouchStartX(event.touches[0].clientX)
      }
    }

    const handleTouchEnd = event => {
      if (touchStartX !== null) {
        const touchEndX = event.changedTouches[0].clientX
        const swipeDistance = touchEndX - touchStartX

        // Увеличиваем минимальное расстояние для свайпа
        if (swipeDistance > 100) {
          setIsOpen(true) // Свайп вправо — открыть меню
        } else if (swipeDistance < -100) {
          setIsOpen(false) // Свайп влево — закрыть меню
        }
      }
      setTouchStartX(null)
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isOpen, touchStartX])

  const menuItems = [
    { name: 'Dashboard', img: '/img/user.svg', path: '/Dashboard' },
    { name: 'Portfolio', img: '/img/activity.svg', path: '/Portfolio' },
    { name: 'Trading', img: '/img/trade.svg', path: '/Trading' },
    { name: 'Watchlist', img: '/img/eye.svg', path: '/Watchlist' },
    { name: 'Academy', img: '/img/book.svg', path: '/Academy' },
    { name: 'Blockchain', img: '/img/menu.svg', path: '/Profile' },
    { name: 'Wallet', img: '/img/wallet-2.svg', path: '/Wallet' },
  ]

  return (
    <>
      <button className='burger-menu' onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? 'burger-line open' : 'burger-line'}></span>
        <span className={isOpen ? 'burger-line open' : 'burger-line'}></span>
        <span className={isOpen ? 'burger-line open' : 'burger-line'}></span>
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <a className='logo-menu'>
          <b>Q</b> BLOCKCHAIN
        </a>

        {isMobile && (
          <div className='search-block'>
            <input className='search-input' type='text' placeholder='Search your coins...' />
            <button className='search-button'>
              <img src='/img/search.svg' className='search-img-menu' alt='' />
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
