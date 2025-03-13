import React from 'react'
import './Dashboard.css'
import Header from '../components/Header'
import CardsCarousel from '../components/CardsCarousel'

const Dashboard = () => {
  const trendingCoins = [
    {
      index: 1,
      imgTitle: 'img/Trending.svg',
      imgCoin: '/img/Tether.svg',
      name: 'Tehter',
      subname: 'USDT',
      precent: '+0.40%',
    },
    {
      index: 2,
      imgTitle: 'img/Shibainu.svg',
      imgCoin: '/img/Uniswap.svg',
      name: 'Uniswap',
      subname: 'UNI',
      precent: '+2.30%',
    },
    {
      index: 3,
      imgTitle: 'img/Trending.svg',
      imgCoin: '/img/WazirX.svg',
      name: 'Wazirx',
      subname: 'WRX',
      precent: '-0.06%',
    },
  ]

  const recentlyAddedCoins = [
    { index: 1, imgCoin: '/img/Stacks.svg', name: 'Pinoxa', subname: 'PINO', price: '$0.000314' },
    { index: 2, imgCoin: '/img/Pinkcoin.svg', name: 'Stacks', subname: 'STK', price: '$0.0008765' },
    {
      index: 3,
      imgCoin: '/img/Symbol.svg',
      name: 'Symbol',
      subname: 'SYB',
      price: '$0.00000001239',
    },
  ]

  const coinsData = [
    {
      logo: '/img/CompoundBadge.svg',
      title: 'Compound',
      price: '$27,308.00',
      precent: '+8250%',
      time: 'All time',
    },
    {
      logo: '/img/Shibainu.svg',
      title: 'Bitcoin',
      price: '$0.0008827',
      precent: '+660910%',
      time: 'All time',
    },
    {
      logo: '/img/Thetafuel.svg',
      title: 'Ethereum',
      price: '$0.04276',
      precent: '-151%',
      time: 'All time',
    },
    {
      logo: '/img/CompoundBadge.svg',
      title: 'Cardano',
      price: '$2.30',
      precent: '+180%',
      time: '3 months',
    },
    {
      logo: '/img/CompoundBadge.svg',
      title: 'Polkadot',
      price: '$35.00',
      precent: '+90%',
      time: '1 month',
    },
  ]

  return (
    <div>
      <Header title={'Dashboard'} />
      <div className='prices-block'>
        <h3 className='title-prices'>
          <i>Today's prices by marketcap</i>
        </h3>
        <div className='prices'>
          <div className='cards-prices'>
            {/* Карточка Trending */}

            <div className='card-prices'>
              <div className='top-card-prices'>
                <h2 className='trending-title'>🔥 Trending</h2>
                <button className='seeAll-prices'>See all</button>
              </div>

              {trendingCoins.map(coin => (
                <div className='coin-trending' key={coin.index}>
                  <div className='coin-content'>
                    <div className='index-coin'>{coin.index}</div>
                    <img src={coin.imgCoin} alt={coin.name} className='img-coin' />
                    <div className='name-coin-prices'>{coin.name}</div>
                    <div className='subname-coin-prices'>{coin.subname}</div>
                  </div>
                  <div className='precent'>{coin.precent}</div>
                </div>
              ))}
            </div>
            <div className='card-prices'>
              <div className='top-card-prices'>
                <h2 className='trending-title'>⌛ Recently added</h2>
                <button className='seeAll-prices'>See all</button>
              </div>

              {recentlyAddedCoins.map(coin => (
                <div className='coin-trending' key={coin.index}>
                  <div className='coin-content'>
                    <div className='index-coin'>{coin.index}</div>
                    <img src={coin.imgCoin} alt={coin.name} className='img-coin' />
                    <div className='name-coin-prices'>{coin.name}</div>
                    <div className='subname-coin-prices'>{coin.subname}</div>
                  </div>
                  <div className='price-card-prices'>{coin.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CardsCarousel coins={coinsData} />
    </div>
  )
}

export default Dashboard
