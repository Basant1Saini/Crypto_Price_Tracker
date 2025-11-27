import { Link } from 'react-router-dom'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { Coin } from '../types/coin'

interface CoinCardProps {
  coin: Coin
}

export default function CoinCard({ coin }: CoinCardProps) {
  const isPositive = coin.price_change_percentage_24h > 0

  return (
    <Link to={`/coin/${coin.id}`} className="card hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img src={coin.image} alt={coin.name} className="w-8 h-8" />
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{coin.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 uppercase">{coin.symbol}</p>
          </div>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">#{coin.market_cap_rank}</span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${coin.current_price.toLocaleString()}
          </span>
          <div className={`flex items-center space-x-1 ${isPositive ? 'text-success' : 'text-error'}`}>
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span className="text-sm font-medium">
              {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
            </span>
          </div>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          <div className="flex justify-between">
            <span>Market Cap:</span>
            <span>${(coin.market_cap / 1e9).toFixed(2)}B</span>
          </div>
          <div className="flex justify-between">
            <span>Volume (24h):</span>
            <span>${(coin.total_volume / 1e6).toFixed(2)}M</span>
          </div>
        </div>
      </div>
    </Link>
  )
}