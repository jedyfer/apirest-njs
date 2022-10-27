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

//  actualizando todo
export const editEmployee = async (req, res) => {
    const id = req.params.id
    const { name, salary } = req.body

    //  console.log(id, name, salary)

    const [result] = await pool.query('UPDATE employee SET name = ?, salary = ? WHERE id = ?', [name, salary, id])

    if (result.affectedRows === 0) return res.status(404).json({
        message: 'Employee not found'
    })

    //  para ver el resultado
    const [employee] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    console.log(employee)
    res.send('Received')
}

//  actualizando parcialmente
export const patchEmplayee = async (req, res) => {
    const id = req.params.id
    const { name, salary } = req.body

    //  IFNULL : si se encuentra un valor null va a dejar el valor que ya estaba antes
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])

    if (result.affectedRows === 0) return res.status(404).json({
        message: 'Employee not found'
    })

    //  para ver el resultado
    const [employee] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    console.log(employee)
    res.send(employee)
}

export const deleteEmployee = async (req, res) => {
    const id = req.params.id

    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [id])

    //  condicional para verificar que se elimino a un empleado
    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Employee not found'
    })

    //  console.log(result)

    res.sendStatus(204) //  204: operacion exitosa, sin mensaje
}
