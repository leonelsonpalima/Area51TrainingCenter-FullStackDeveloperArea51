import http = require("http")

const manejador = {
	listado: (req: http.IncomingMessage, res: http.ServerResponse) => {
		res.statusCode = 200
		res.setHeader("content-type", "application/json")
		res.end(JSON.stringify([
			{ nombre: "Amelia" },
			{ nombre: "Jana" }
		]))
	},
	edicion: (req: http.IncomingMessage, res: http.ServerResponse) => {
		res.statusCode = 200
		res.setHeader("content-type", "text/html")
		res.end(
			`
			<form action="/usuarios/editar" method="POST">
			<input type="text" name="nombre" placeholder="Ingrese su nombre">
			<br>
			<input type="text" name="apellido" placeholder="Ingrese su apellido">
			<br>
			<button>Editar</button>
			</form>
			`
		)
	},
	actualizar: (req: http.IncomingMessage, res: http.ServerResponse) => {
		res.statusCode = 302
		res.setHeader("Location", "/usuarios")
	}


export { manejador }