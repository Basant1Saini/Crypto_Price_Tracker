import { Router } from 'express'

const router = Router()

router.post('/login', (req, res) => {
  res.json({ message: 'Auth endpoints coming soon' })
})

router.post('/register', (req, res) => {
  res.json({ message: 'Auth endpoints coming soon' })
})

export default router