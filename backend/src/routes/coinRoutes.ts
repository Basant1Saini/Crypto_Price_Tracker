import { Router } from 'express'
import { coinController } from '../controllers/coinController'

const router = Router()

router.get('/', coinController.getCoins)
router.get('/:id/price', coinController.getCoinPrice)
router.get('/:id/history', coinController.getCoinHistory)

export default router