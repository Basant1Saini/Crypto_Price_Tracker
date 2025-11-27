import { useParams } from 'react-router-dom'

export default function CoinDetail() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Coin Details: {id}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">Detailed information and charts</p>
      </div>

      <div className="card">
        <p className="text-center text-gray-500 dark:text-gray-400">
          Coin detail view coming soon...
        </p>
      </div>
    </div>
  )
}