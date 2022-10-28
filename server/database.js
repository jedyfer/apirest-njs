import { createPool } from 'mysql2/promise' //  para usar async await
import { HOST, USER, PASSWORD, DATABASE, DB_PORT } from './config.js'

export const pool = createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    port: DB_PORT,
    database: DATABASE
})