import { useQuery } from '@tanstack/react-query'
import { coinService } from '../services/coinService'
import CoinCard from '../components/CoinCard'
import MarketOverview from '../components/MarketOverview'

export default function Dashboard() {
  const { data: coins, isLoading } = useQuery({
    queryKey: ['coins'],
    queryFn: coinService.getCoins,
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Track cryptocurrency prices in real-time</p>
      </div>

      <MarketOverview />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {coins?.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  )
}