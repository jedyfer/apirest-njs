import express from 'express'
import { pool } from './database.js'    //  cuando uso modulos propios necesario el .js cuando no no es necesario

const app = express()

//  usando la conexion de db
app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT 1 + 1 AS result')
    res.json(result[0])
})

app.get('/employees', (req, res) => res.send('Obteniendo empleados'))

app.post('/employees', (req, res) => res.send('Creando empleados'))

app.put('/employees', (req, res) => res.send('Actualizando empleados'))

app.delete('/employees', (req, res) => res.send('Eliminando empleados'))

app.listen(3000)

console.log('Server running on port 3000')

/* 26:06 video */