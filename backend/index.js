import express from 'express' //ESM
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import { db } from './config/db.js'
import servicesRoutes from './routes/servicesRoutes.js'
import authRoutes from './routes/authRoutes.js'
import appointmentRoutes from './routes/appointmentRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

const app = express()

app.use(express.json())

db()



const whiteList = [process.env.FRONTEND_URL]

if(process.argv[2] === '--postman') {
  whiteList.push(undefined)
}

const corsOptions = {
  origin: function(origin, callback) {
    if(whiteList.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Error de CORS'))
    }
  }
}

app.use(cors(corsOptions))

app.use('/api/services', servicesRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/appointments', appointmentRoutes)
app.use('/api/users', userRoutes)


const PORT = process.env.PORTT || 8080

app.listen(PORT, () => {
  console.log(colors.blue('El servidor está ejecutando en el puerto:', colors.bold(PORT)))
} )