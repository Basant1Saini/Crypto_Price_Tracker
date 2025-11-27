import axios from 'axios'
import { redisClient } from '../config/redis'
import { logger } from '../utils/logger'

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3'
const CACHE_TTL = 300 // 5 minutes

export const coinService = {
  async getTopCoins(limit: number = 50) {
    const cacheKey = `coins:top:${limit}`
    
    try {
      // Try to get from cache first
      const cached = await redisClient.get(cacheKey)
      if (cached) {
        return JSON.parse(cached)
      }

      // Fetch from CoinGecko API
      const response = await axios.get(`${COINGECKO_API_URL}/coins/markets`, {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: limit,
          page: 1,
          sparkline: false,
          price_change_percentage: '24h'
        },
        headers: {
          'X-CG-Demo-API-Key': process.env.COINGECKO_API_KEY
        }
      })

      const coins = response.data
      
      // Cache the result
      await redisClient.setEx(cacheKey, CACHE_TTL, JSON.stringify(coins))
      
      return coins
    } catch (error) {
      logger.error('Error fetching top coins:', error)
      throw error
    }
  },

  async getCoinPrice(coinId: string) {
    const cacheKey = `coin:price:${coinId}`
    
    try {
      // Try cache first
      const cached = await redisClient.get(cacheKey)
      if (cached) {
        return parseFloat(cached)
      }

      // Fetch from API
      const response = await axios.get(`${COINGECKO_API_URL}/simple/price`, {
        params: {
          ids: coinId,
          vs_currencies: 'usd'
        },
        headers: {
          'X-CG-Demo-API-Key': process.env.COINGECKO_API_KEY
        }
      })

      const price = response.data[coinId]?.usd
      
      if (price) {
        // Cache for 1 minute
        await redisClient.setEx(cacheKey, 60, price.toString())
      }
      
      return price
    } catch (error) {
      logger.error(`Error fetching price for ${coinId}:`, error)
      throw error
    }
  },

  async getCoinHistory(coinId: string, days: number = 7) {
    const cacheKey = `coin:history:${coinId}:${days}`
    
    try {
      // Try cache first
      const cached = await redisClient.get(cacheKey)
      if (cached) {
        return JSON.parse(cached)
      }

      // Fetch from API
      const response = await axios.get(`${COINGECKO_API_URL}/coins/${coinId}/market_chart`, {
        params: {
          vs_currency: 'usd',
          days: days,
          interval: days > 1 ? 'hourly' : 'minutely'
        },
        headers: {
          'X-CG-Demo-API-Key': process.env.COINGECKO_API_KEY
        }
      })

      const history = response.data.prices.map(([timestamp, price]: [number, number]) => ({
        timestamp,
        price
      }))
      
      // Cache for 10 minutes
      await redisClient.setEx(cacheKey, 600, JSON.stringify(history))
      
      return history
    } catch (error) {
      logger.error(`Error fetching history for ${coinId}:`, error)
      throw error
    }
  }
}