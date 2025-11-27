import axios from 'axios'
import { Coin } from '../types/coin'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  timeout: 10000,
})

export const coinService = {
  async getCoins(): Promise<Coin[]> {
    const response = await api.get('/coins')
    return response.data
  },

  async getCoinPrice(id: string): Promise<number> {
    const response = await api.get(`/coins/${id}/price`)
    return response.data.price
  },

  async getCoinHistory(id: string, days: number = 7): Promise<any[]> {
    const response = await api.get(`/coins/${id}/history?days=${days}`)
    return response.data
  },
}