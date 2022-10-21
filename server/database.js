import { createPool } from 'mysql2/promise' //  para usar async await

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'njs_apirest'
})