import {connect} from '../database'

export const getProducts = async (req, res) => {
	const connection = await connect();
	const[rows] = await connection.query('SELECT * FROM tbl_articulo');
	res.json(rows)
}

export const getProduct = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query('SELECT * FROM tbl_articulo WHERE id = ?', [
		req.params.id,
	]);
	res.json(rows[0])
}

export const createProduct = async (req, res) => {
	const connection = await connect();
	const [results] = await connection.query("INSERT tbl_articulo(nombre, precio, descripcion, id_proveedor, id_categoria) VALUES(?, ?, ?, ?, ?)", [
		req.body.nombre,
		req.body.precio,
		req.body.descripcion,
		req.body.id_proveedor,
		req.body.id_categoria
	])
	res.status(201).json({
		id: results.insertId,
		...req.body
	});
}

export const updateProduct = async (req, res) => {
	const connection = await connect();
	await connection.query('UPDATE tbl_articulo SET ? WHERE id = ?', [
		req.body,
		req.params.id
	])
	res.sendStatus(204)
}

export const deleteProduct = async (req, res) => {
	const connection = await connect();
	await connection.query("DELETE FROM tbl_articulo WHERE id = ?", [
		req.params.id, 
	])
	res.sendStatus(204)
}