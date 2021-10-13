import {connect} from '../database'

export const getProducts = async (req, res) => {
	const db = await connect()
	const[rows] = await db.query('SELECT * FROM tbl_articulo')
	console.log(rows);
	res.json(rows)
}

export const getProduct = (req, res) => {
	res.send('Ready')
}

export const createProduct = (req, res) => {
	res.send('Created Product!')
}

export const updateProduct = (req, res) => {
	res.send('Updtate Product!')
}

export const deleteProduct = (req, res) => {
	res.send('Delete Product!')
}