import { pool } from '../database.js'

export const getEmployees = async (req, res) => {
    try {
        //  throw new Error('my error') //  crea un error para testing
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)
    } catch(err) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export const getEmployeeById = async (req, res) => {
    const id = req.params.id

    try {
        //  const [row] = await pool.query(`SELECT * FROM employee WHERE id = ${id}`)
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
        
        //  condicional
        if (rows.length <= 0) return res.status(404).json({
            message: 'Employee not found'
        })

        res.json(rows[0])
    } catch (err) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export const createEmployee = async (req, res) => {
    const { name, salary } = req.body   //  el req.body obtiene los datos enviados desde el cliente
    
    try {
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
        //  esto se puede probar en el postman enviando objetos json para guardar en la tabla
    
        //  res.send({ rows })
        res.send({
            id: rows.insertId,
            name,
            salary
        })
    } catch (err) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

//  actualizando todo
export const editEmployee = async (req, res) => {
    const id = req.params.id
    const { name, salary } = req.body
    //  console.log(id, name, salary)
    
    try {
        const [result] = await pool.query('UPDATE employee SET name = ?, salary = ? WHERE id = ?', [name, salary, id])
    
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Employee not found'
        })
    
        //  para ver el resultado
        const [employee] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
    
        console.log(employee)
        res.send('Received')
    } catch (err) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

//  actualizando parcialmente
export const patchEmplayee = async (req, res) => {
    const id = req.params.id
    const { name, salary } = req.body

    try {
        //  IFNULL : si se encuentra un valor null va a dejar el valor que ya estaba antes
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
    
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Employee not found'
        })
    
        //  para ver el resultado
        const [employee] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
    
        console.log(employee)
        res.send(employee)
    } catch (err) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export const deleteEmployee = async (req, res) => {
    const id = req.params.id

    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [id])
    
        //  condicional para verificar que se elimino a un empleado
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Employee not found'
        })
    
        //  console.log(result)
        res.sendStatus(204) //  204: operacion exitosa, sin mensaje
    } catch (err) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
}
