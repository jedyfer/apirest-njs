import { Router } from 'express'
import { createEmployee, deleteEmployee, editEmployee, getEmployeeById, getEmployees } from '../controllers/employees.controller.js'

const router = Router()

//  get all employees
router.get('/employees', getEmployees)

//  get employee by id
router.get('/employee/:id', getEmployeeById)

router.post('/employees', createEmployee)

router.put('/employees', editEmployee)

router.delete('/employee/:id', deleteEmployee)

export default router