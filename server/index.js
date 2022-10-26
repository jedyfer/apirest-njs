import express from 'express'   //  cuando uso modulos propios necesario el .js cuando no no es necesario
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

//  para que pueda interpretar json
app.use(express.json())

//  usando la conexion de db
app.use(indexRoutes)

//  usando las rutas
app.use('/api', employeesRoutes)    //  esto significa que antes de la ruta ira /api

app.listen(3000)

console.log('Server running on port 3000')

/* 45:54 video */