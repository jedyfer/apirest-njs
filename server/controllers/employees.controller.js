import { pool } from '../database.js'

export const getEmployees = (req, res) => res.send('Obteniendo empleados')

export const createEmployee = async (req, res) => {
    const { name, salary } = req.body   //  el req.body obtiene los datos enviados desde el cliente
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    //  esto se puede probar en el postman enviando objetos json para guardar en la tabla

    //  res.send({ rows })
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}

export const editEmployee = (req, res) => res.send('Actualizando empleados')

export const deleteEmployee = (req, res) => res.send('Eliminando empleados')
