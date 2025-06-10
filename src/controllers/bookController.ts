import {Request,Response} from 'express'
import {Book} from '../models/book'
import { successResponse, errorResponse } from '../utils/responseHandler'

export const getBooks = async(req: Request, res: Response)=>{
    try{
        const books = await Book.find({})
        successResponse(res, books, "Libros encontrados")
    }catch(err){
        errorResponse(res,"Error al obtener libros")
    }
}

export const getBookById = async(req: Request, res: Response)=>{
    try{
        const book = await Book.findById(req.params.id)
        if(!book){
           return errorResponse(res, "Libro no encontrado",404)
        }

        return successResponse(res, book, "Libro encontrado")

    }catch(err){
        errorResponse(res, "Error al obtener libro")
    }
}

export const createBook = async(req: Request, res: Response)=>{
    try{
        const newBook = new Book(req.body)
        const savedBook = await newBook.save()
        successResponse(res, savedBook, "Libro creado",201)
    }catch(err){
        errorResponse(res, "Error al crear libro")
    }
}

export const updateBook = async(req: Request, res: Response)=>{
    try{
       const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
       if (!updatedBook) {
           return errorResponse(res, "Libro no encontrado", 404)
       }
       successResponse(res, updatedBook, "Libro actualizado")
    }catch(err){
        errorResponse(res, "Error al actualizar libro")
    }
}

export const deleteBook = async(req: Request, res: Response)=>{
    try{
        const deletedBook = await Book.findByIdAndDelete(req.params.id)
        if (!deletedBook) {
            return errorResponse(res, "Libro no encontrado", 404)
        }
        res.json({data: deletedBook, success: true})
    }catch(err){
        errorResponse(res, "Error al eliminar libro")
    }
}