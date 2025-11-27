export default function MarketOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="card">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Market Cap</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">$2.45T</p>
        <p className="text-sm text-success">+2.34%</p>
      </div>
      
      <div className="card">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">24h Volume</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">$89.2B</p>
        <p className="text-sm text-error">-1.23%</p>
      </div>
      
      <div className="card">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">BTC Dominance</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">52.1%</p>
        <p className="text-sm text-success">+0.45%</p>
      </div>
      
      <div className="card">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Coins</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">2,847</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Markets</p>
      </div>
    </div>
  )
}