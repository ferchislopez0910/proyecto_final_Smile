require('dotenv').config()
export const config = {
	host: 		process.env.DB_HOST,
	user: 		process.env.DB_USER,
	password: 	process.env.DB_PASS,
	database: 	process.env.DB_DATABASE,
	port: 		process.env.DB_POR
}