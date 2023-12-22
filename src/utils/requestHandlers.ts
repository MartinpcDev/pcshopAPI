import { Response } from "express"

export const sendSuccess = (res: Response, data: any, statusCode: number = 200) => {
  res.status(statusCode).json({
    sucess: true,
    data,
    error: null
  })
}

export const sendError = (res: Response, message: string = 'Internal Server Error', statusCode: number = 500) => {
  res.status(statusCode).json({
    sucess: false,
    data: null,
    error: {
      message
    }
  })
}