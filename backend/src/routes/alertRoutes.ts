import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Alert endpoints coming soon' })
})

router.post('/', (req, res) => {
  res.json({ message: 'Alert endpoints coming soon' })
})

export default router