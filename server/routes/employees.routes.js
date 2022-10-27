import { Router } from 'express'
import { createEmployee, deleteEmployee, editEmployee, getEmployeeById, getEmployees, patchEmplayee } from '../controllers/employees.controller.js'

const router = Router()

//  get all employees
router.get('/employees', getEmployees)

//  get employee by id
router.get('/employee/:id', getEmployeeById)

router.post('/employees', createEmployee)

router.put('/employee/:id', editEmployee)

router.patch('/employee/:id', patchEmplayee)

router.delete('/employee/:id', deleteEmployee)

export default router