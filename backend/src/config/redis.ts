import { createClient } from 'redis'
import { logger } from '../utils/logger'

const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
})

export const connectRedis = async (): Promise<void> => {
  try {
    await redisClient.connect()
    logger.info('Redis connected successfully')
  } catch (error) {
    logger.error('Redis connection error:', error)
    throw error
  }
}

redisClient.on('error', (error) => {
  logger.error('Redis error:', error)
})

redisClient.on('disconnect', () => {
  logger.warn('Redis disconnected')
})

export { redisClient }