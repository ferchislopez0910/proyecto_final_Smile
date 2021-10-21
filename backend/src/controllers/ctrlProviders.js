import {connect} from '../database'

export const getProviders = async (req, res) => {
	const connection = await connect();
	const[rows] = await connection.query('SELECT * FROM tbl_proveedor');
	res.json(rows)
}

export const getProvider = async (req, res) => {
	const connection = await connect();
	const [rows] = await connection.query('SELECT * FROM tbl_proveedor WHERE id = ?', [
		req.params.id,
	]);
	res.json(rows[0])
}

export const createProviders = async (req, res) => {
	const connection = await connect();
	const [results] = await connection.query("INSERT tbl_proveedor(identificacion, nombre, telefono, direccion, whatsapp_link, fecha_registro) VALUES(?, ?, ?, ?, ?, ?)", [
		req.body.identificacion,
		req.body.nombre,
		req.body.telefono,
		req.body.direccion,
		req.body.whatsapp_link,
		req.body.fecha_registro,
	])
	res.status(201).json({
		id: results.insertId,
		...req.body
	});
}

export const updateProvider = async (req, res) => {
	const connection = await connect();
	await connection.query('UPDATE tbl_proveedor SET ? WHERE id = ?', [
		req.body,
		req.params.id
	])
	res.sendStatus(204)
}

export const deleteProvider = async (req, res) => {
	const connection = await connect();
	await connection.query("DELETE FROM tbl_proveedor WHERE id = ?", [
		req.params.id, 
	])
	res.sendStatus(204)
}
