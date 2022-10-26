import { pool } from '../database.js'

export const getEmployees = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee')

    res.json(rows)
}

export const getEmployeeById = async (req, res) => {
    const id = req.params.id

    //  const [row] = await pool.query(`SELECT * FROM employee WHERE id = ${id}`)
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
    
    //  condicional
    if (rows.length <= 0) return res.status(404).json({
        message: 'Employee not found'
    })

    res.json(rows[0])
}

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
