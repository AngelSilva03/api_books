import {Request,Response} from 'express'
import {Book} from '../models/book'

export const getBooks = async(req: Request, res: Response)=>{
    try{
        const books = await Book.find({})
        res.json(books)
    }catch(err){
        res.status(500).json({message: "Error al obtener libros"})
    }
}

export const getBookById = async(req: Request, res: Response)=>{
    try{
        const book = await Book.findById(req.params.id)
        if(!book){
            res.status(404).json({message: "Libro no encontrado",success: false})
        }

        res.json({data: book, success: true})

    }catch(err){
        res.status(500).json({message: "Error al obtener libro"})
    }
}

export const createBook = async(req: Request, res: Response)=>{
    try{
        const newBook = new Book(req.body)
        const savedBook = await newBook.save()
        res.status(201).json({data: savedBook, success: true})
    }catch(err){
        res.status(400).json({message: "Error al crear libro"})
    }
}

export const updateBook = async(req: Request, res: Response)=>{
    try{
       const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
       if (!updatedBook) {
           res.status(404).json({message: "Libro no encontrado", success: false})
       }
       res.json({data: updatedBook, success: true})
    }catch(err){
        res.status(500).json({message: "Error al actualizar libro"})
    }
}

export const deleteBook = async(req: Request, res: Response)=>{
    try{
        const deletedBook = await Book.findByIdAndDelete(req.params.id)
        if (!deletedBook) {
            res.status(404).json({message: "Libro no encontrado", success: false})
        }
        res.json({data: deletedBook, success: true})
    }catch(err){
        res.status(500).json({message: "Error al eliminar libro"})
    }
}