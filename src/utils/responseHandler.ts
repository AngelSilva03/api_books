import {Response} from 'express'

export const successResponse = (
    res: Response,
    data:any,
    message = "Operacion exitosa",
    statusCode = 200
) => {
    res.status(statusCode).json({
        status: true,
        message,
        data
    })
}

export const errorResponse = (
    res: Response,
    message = "Error en la operacion",
    statusCode = 500
)   => {
    res.status(statusCode).json({
        status: false,
        message,
        data: null
    })
}