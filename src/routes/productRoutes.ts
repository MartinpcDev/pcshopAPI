import { deleteProduct, getAllProducts, getProductById, postProduct, updateProduct } from '../controllers/productController';
import { Router } from "express";

const productRouter = Router()

productRouter.get('/', getAllProducts)

productRouter.get('/:id', getProductById)

productRouter.post('/', postProduct)

productRouter.put('/:id', updateProduct)

productRouter.delete('/:id', deleteProduct)

export default productRouter
