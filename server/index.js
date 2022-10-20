import express from 'express'

const app = express()

app.get('/employees', (req, res) => res.send('Obteniendo empleados'))

app.post('/employees', (req, res) => res.send('Creando empleados'))

app.put('/employees', (req, res) => res.send('Actualizando empleados'))

app.delete('/employees', (req, res) => res.send('Eliminando empleados'))

app.listen(3000)

console.log('Server running on port 3000')

/* 20:23 video */