import { Request, Response } from "express"
import {
  deleteProductService,
  getAllProductsService,
  getProductByIdService,
  postProductService,
  updateProductService
} from '../services/productService'
import { sendError, sendSuccess } from "../utils/requestHandlers"

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const productos = await getAllProductsService()
    sendSuccess(res, productos)
  } catch (error: any) {
    sendError(res, error.message)
  }
}

export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params['id'])
    const product = await getProductByIdService(id)
    if (product) {
      sendSuccess(res, product)
    } else {
      sendError(res, 'Producto no encontrado', 404)
    }
  } catch (error: any) {
    sendError(res, error.message)
  }
}

export const postProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const product = await postProductService(data)
    if (product) {
      sendSuccess(res, product, 201)
    } else {
      sendError(res, 'No se pudo Crear el producto')
    }
  } catch (error: any) {
    sendError(res, error.message)
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const id = Number(req.params['id'])
    const product = await updateProductService(data, id)
    if (product) {
      sendSuccess(res, product)
    } else {
      sendError(res, 'Producto no encontrado', 404)
    }
  } catch (error: any) {
    sendError(res, error.message)
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params['id'])
    const deleted = await deleteProductService(id)
    if (deleted) {
      sendSuccess(res, {})
    } else {
      sendError(res, 'Producto no encontrado', 404)
    }
  } catch (error: any) {
    sendError(res, error.message)
  }

}