// aca se conecta a la bd
import mysql from 'mysql2/promise'
import { config } from "./config";

export const connect = async () => {
	console.log(config)
	return await mysql.createConnection(config);
}
