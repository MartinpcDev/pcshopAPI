import { Router } from 'express'
import productRoutes from './productRoutes'

const router = Router()

router.use('/products', productRoutes)

export default router