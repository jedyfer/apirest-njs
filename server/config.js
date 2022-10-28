import { config } from 'dotenv'

config()

//  process : proceso global de node
//  console.log(process.env.DB_PASSWORD)

export const PORT = process.env.PORT || '3000'
export const USER = process.env.DB_USER || 'root'
export const PASSWORD = process.env.DB_PASSWORD || ''
export const DATABASE = process.env.DB_NAME || 'njs_apirest'
export const HOST = process.env.DB_HOST || 'localhost'
export const DB_PORT = process.env.DB_PORT || '3306'
