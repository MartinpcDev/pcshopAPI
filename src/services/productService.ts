import { Producto } from "../models/product";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../database/database";

export const getAllProductsService = async (): Promise<Producto[]> => {
  const products = await db.query<RowDataPacket[]>('SELECT * FROM productos')
  return products as Producto[]
}

export const getProductByIdService = async (id: number): Promise<Producto | null> => {
  const products = await db.query<RowDataPacket[]>('SELECT * FROM productos WHERE id = ?', id)
  if (Array.isArray(products) && products.length > 0) {
    return products[0] as Producto
  }
  return null
}

export const postProductService = async (data: Producto): Promise<Producto | null> => {
  const result = await db.query<ResultSetHeader>('INSERT INTO productos SET ?', data)
  if (result.insertId) {
    return await getProductByIdService(result.insertId)
  }
  return null
}

export const updateProductService = async (data: Producto, id: number): Promise<Producto | null> => {
  const result = await db.query<ResultSetHeader>('UPDATE productos SET ? WHERE id = ?', [data, id])
  if (result.affectedRows) {
    return await getProductByIdService(id)
  }
  return null
}

export const deleteProductService = async (id: number): Promise<boolean> => {
  const result = await db.query<ResultSetHeader>('DELETE FROM productos WHERE id = ?', id)
  return result.affectedRows > 0
}