import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Portfolio endpoints coming soon' })
})

router.post('/add', (req, res) => {
  res.json({ message: 'Portfolio endpoints coming soon' })
})

export default router