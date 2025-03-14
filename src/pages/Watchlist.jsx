import React from 'react'
import Header from '../components/Header'
import './Watchlist.css'
import CryptoTable from '../components/CryptoTable'
import Menu from '../components/Menu'
import MenuButtom from '../components/MenuButtom'

const Watchlist = () => {
  const data = [
    {
      id: 1,
      coins: 2,
      name: 'Tether',
      symbol: 'Usdt',
      titleLogo: '/img/Tether.svg',
      price: '1.00',
      change24h: -5.12,
      change7d: 1.12,
      marketCap: '23,621,421,545',
      volume: '2,487,902,497',
      chart: '/img/graph-trafic.svg',
    },
    {
      id: 2,
      coins: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      titleLogo: '/img/Frame 48100353.svg',
      price: '26,735.59',
      change24h: 2.34,
      change7d: -1.45,
      marketCap: '12,345,678,910',
      volume: '987,654,321',
      chart: '/img/graph-trafic.svg',
    },
    {
      id: 3,
      coins: 8,
      name: 'SushiSwap',
      symbol: 'Sushi',
      titleLogo: '/img/SushiSwap.svg',
      price: '0.8802',
      change24h: 2.34,
      change7d: -1.45,
      marketCap: '12,345,678,910',
      volume: '987,654,321',
      chart: '/img/graph-trafic.svg',
    },
    {
      id: 4,
      coins: 9,
      name: 'Bitstamp',
      symbol: 'BIT',
      titleLogo: '/img/Bitstamp.svg',
      price: '0.1802',
      change24h: 2.34,
      change7d: -1.45,
      marketCap: '12,345,678,910',
      volume: '987,654,321',
      chart: '/img/graph-trafic.svg',
    },
    {
      id: 5,
      coins: 11,
      name: 'Gemini',
      symbol: 'Gusd',
      titleLogo: '/img/Gemini.svg',
      price: '0.909802',
      change24h: 2.34,
      change7d: -1.45,
      marketCap: '12,345,678,910',
      volume: '987,654,321',
      chart: '/img/graph-trafic.svg',
    },
    {
      id: 6,
      coins: 12,
      name: 'Medibloc',
      symbol: 'MED',
      titleLogo: '/img/Medibloc.svg',
      price: '1805.23',
      change24h: 2.34,
      change7d: -1.45,
      marketCap: '12,345,678,910',
      volume: '987,654,321',
      chart: '/img/graph-trafic.svg',
    },
    {
      id: 7,
      coins: 3,
      name: 'Kucoin',
      symbol: 'KU',
      titleLogo: '/img/Kucoin.svg',
      price: '1805.23',
      change24h: 2.34,
      change7d: -1.45,
      marketCap: '12,345,678,910',
      volume: '987,654,321',
      chart: '/img/graph-trafic.svg',
    },
    {
      id: 8,
      coins: 4,
      name: 'Hexicon',
      symbol: 'HEX',
      titleLogo: '/img/Hex.svg',
      price: '1805.23',
      change24h: 2.34,
      change7d: -1.45,
      marketCap: '12,345,678,910',
      volume: '987,654,321',
      chart: '/img/graph-trafic.svg',
    },
    {
      id: 9,
      coins: 10,
      name: 'Decentraland',
      symbol: 'MANA',
      titleLogo: '/img/Decentraland.svg',
      price: '1805.23',
      change24h: 2.34,
      change7d: -1.45,
      marketCap: '12,345,678,910',
      volume: '987,654,321',
      chart: '/img/graph-trafic.svg',
    },
  ]
  return (
    <div>
      <Header title={'Watchlist'} />
      <Menu />
      <MenuButtom />
      <div className='Watchlist-content'>
        <div className='myCoins-block'>
          <div className='primary-block'>
            <div className='primary'>Primary</div>
            <div className='coins-list'>
              My coins list{' '}
              <img src='/img/arrow-down-coins.svg' alt='' className='coins-list-img' />
            </div>
          </div>

          <div className='buttons-coins'>
            <button className='button-edit'>
              <img src='/img/edit-2.svg' alt='' className='button-edit-icon' />
              <div className='button-edit-text'>Edit</div>
            </button>
            <button className='button-new-watchlist'>
              <img src='/img/add-watchlist.svg' alt='' className='button-watchlist-icon' />
              <div className='button-watchlist-text'>New watchlist</div>
            </button>
          </div>
        </div>
        <CryptoTable data={data} />
      </div>
    </div>
  )
}

export default Watchlist
