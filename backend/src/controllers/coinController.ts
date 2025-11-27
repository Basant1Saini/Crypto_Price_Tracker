import { Request, Response, NextFunction } from 'express'
import { coinService } from '../services/coinService'
import { createError } from '../middleware/errorHandler'

export const coinController = {
  async getCoins(req: Request, res: Response, next: NextFunction) {
    try {
      const coins = await coinService.getTopCoins()
      res.json(coins)
    } catch (error) {
      next(createError('Failed to fetch coins', 500))
    }
  },

  async getCoinPrice(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const price = await coinService.getCoinPrice(id)
      
      if (!price) {
        return next(createError('Coin not found', 404))
      }
      
      res.json({ price })
    } catch (error) {
      next(createError('Failed to fetch coin price', 500))
    }
  },

  async getCoinHistory(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const { days = '7' } = req.query
      
      const history = await coinService.getCoinHistory(id, parseInt(days as string))
      res.json(history)
    } catch (error) {
      next(createError('Failed to fetch coin history', 500))
    }
  }
}