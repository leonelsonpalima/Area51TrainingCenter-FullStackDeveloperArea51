import http = require("http")
import url = require("url")

const rutas = [
	{
		path: "usuarios", controlador: "listado",
	},
	{
		path: "usuarios/edicion", controlador: "edicion"
	}
]

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
			<form action="/usuarios/editar">
			<input type="text" name="nombre" placeholder="Ingrese su nombre">
			<br>
			<input type="text" name="apellido" placeholder="Ingrese su apellido">
			<br>
			<button>Editar</button>
			</form>
			`
		)
	}
}


const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
	const parseado = url.parse(req.url, true)
	const ruta = parseado.pathname.replace(/^\/+|\/+$/g, "")

	let rutaEncontrada

	for (let i = 0; i < rutas.length; i++) {
		if (rutas[i].path == ruta) {
			rutaEncontrada = rutas[i]
			break
		}
	}

	if (rutaEncontrada) {
		return manejador[rutaEncontrada.controlador](req, res)
	}

	res.statusCode = 404
	res.end("Ruta no encontrada")

	//res.end("Servidor respondiendo")
})

servidor.listen(3000, () => console.log("Servidor ejecutandose en el puerto 3000"))