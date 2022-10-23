import { Router } from 'express'
import { createEmployee, deleteEmployee, editEmployee, getEmployees } from '../controllers/employees.controller.js'

const router = Router()

router.get('/employees', getEmployees)

router.post('/employees', createEmployee)

router.put('/employees', editEmployee)

router.delete('/employees', deleteEmployee)

export default router