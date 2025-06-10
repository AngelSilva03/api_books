import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/mongoDB'
import bookRoutes from './routes/bookRoutes'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api',bookRoutes)

connectDB()

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})