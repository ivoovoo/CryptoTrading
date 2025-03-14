import React from 'react'
import './CryptoTable.css'

const CryptoTable = ({ data }) => {
  return (
    <div className='crypto-table-container'>
      <div className='crypto-table-buttons'>
        <div className='crypto-table-buttonsContent'>
          <button className='btn-add'>
            <img src='/img/add-coins.svg' alt='' />
            Add coins
          </button>
          <button className='btn-share'>
            <img src='/img/share.svg' alt='' />
            Share
          </button>
          <button className='btn-more'>
            <img src='/img/more.svg' alt='' />
            More
          </button>
        </div>
      </div>
      <table className='crypto-table'>
        <thead>
          <tr>
            <th className='stars-th'>#</th>
            <th className='name-th'>Name</th>
            <th className='price-th'>Price</th>
            <th className='hours-th'>24H</th>
            <th className='days-th'>7D</th>
            <th className='market-th'>
              <span>Market Cap</span>
            </th>
            <th className='volume-th'>
              <span>Volume</span>
            </th>
            <th className='last-th'>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {data.map(coin => (
            <tr key={coin.id}>
              <td className='stars'>
                <img src='/img/star.svg' alt='' />
                {coin.coins}
              </td>
              <td>
                <div className='coins-name-td'>
                  <img src={coin.titleLogo} alt='' />
                  <div className='coin-name-td'>
                    <span className='coin-name'>{coin.name}</span>
                    <span className='coin-symbol'>{coin.symbol.toUpperCase()}</span>
                  </div>
                </div>
              </td>
              <td>${coin.price}</td>
              <td className={coin.change24h >= 0 ? 'text-green' : 'text-red'}>{coin.change24h}%</td>
              <td className={coin.change7d >= 0 ? 'text-green' : 'text-red'}>{coin.change7d}%</td>
              <td>${coin.marketCap}</td>
              <td>${coin.volume}</td>
              <td>
                <img src={coin.chart} alt='chart' className='chart-img' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CryptoTable
