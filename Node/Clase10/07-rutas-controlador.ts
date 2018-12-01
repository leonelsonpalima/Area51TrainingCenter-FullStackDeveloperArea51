import http = require("http")
import url = require("url")

import { manejador as manejadorUsuarios } from "./controladores/controlador"

const rutas = [
	{
		path: "usuarios", controlador: "listado", method: "get"
	},
	{
		path: "usuarios/edicion", controlador: "edicion", method: "get"
	},
	{
		path: "usuarios/edicion", controlador: "actualizar", method: "post"
	}
]




const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
	const parseado = url.parse(req.url, true)
	const ruta = parseado.pathname.replace(/^\/+|\/+$/g, "")
	const methodo = req.method.toLowerCase()

	let rutaEncontrada

	for (let i = 0; i < rutas.length; i++) {
		if (rutas[i].path == ruta) {
			rutaEncontrada = rutas[i]
			break
		}
	}

	if (rutaEncontrada) {
		return manejadorUsuarios[rutaEncontrada.controlador](req, res)
	}

	res.statusCode = 404
	res.end("Ruta no encontrada")

	//res.end("Servidor respondiendo")
})

servidor.listen(3000, () => console.log("Servidor ejecutandose en el puerto 3000"))