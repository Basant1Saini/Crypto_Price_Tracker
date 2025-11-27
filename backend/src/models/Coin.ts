import mongoose, { Document, Schema } from 'mongoose'

export interface ICoin extends Document {
  coinId: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  price_change_percentage_24h: number
  total_volume: number
  high_24h: number
  low_24h: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  ath: number
  ath_change_percentage: number
  ath_date: Date
  atl: number
  atl_change_percentage: number
  atl_date: Date
  last_updated: Date
}

const coinSchema = new Schema<ICoin>({
  coinId: { type: String, required: true, unique: true },
  symbol: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  current_price: { type: Number, required: true },
  market_cap: { type: Number, required: true },
  market_cap_rank: { type: Number, required: true },
  price_change_percentage_24h: { type: Number, required: true },
  total_volume: { type: Number, required: true },
  high_24h: { type: Number, required: true },
  low_24h: { type: Number, required: true },
  circulating_supply: { type: Number },
  total_supply: { type: Number },
  max_supply: { type: Number },
  ath: { type: Number, required: true },
  ath_change_percentage: { type: Number, required: true },
  ath_date: { type: Date, required: true },
  atl: { type: Number, required: true },
  atl_change_percentage: { type: Number, required: true },
  atl_date: { type: Date, required: true },
  last_updated: { type: Date, default: Date.now }
}, {
  timestamps: true
})

export const Coin = mongoose.model<ICoin>('Coin', coinSchema)