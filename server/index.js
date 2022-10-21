import express from 'express'   //  cuando uso modulos propios necesario el .js cuando no no es necesario
import employeesRoutes from './routes/employes.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

//  usando la conexion de db
app.use(indexRoutes)

//  usando las rutas
app.use(employeesRoutes)

app.listen(3000)

console.log('Server running on port 3000')

/* 26:06 video */