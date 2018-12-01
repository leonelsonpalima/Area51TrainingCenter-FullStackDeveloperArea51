import http = require("http")

//req es el primer parametro, el que recibe, require
//res es el segundo parametro, la respuesta, response

const servidor: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {

	/*
	res.writeHead(200, { "content-type": "text/plain" })
	res.write("Mi nombre")
	res.write(" es Leonelson")
	res.end(" y mi apellido es Palima")
	//res.end()
	*/

	/*
	res.statusCode = 200
	res.setHeader("content-type", "text/plain")
	res.end("Mi nombre es Leonelson Palima")
	*/

	/*
	res.statusCode = 200
	res.setHeader("content-type", "text/html")
	res.end("Mi nombre es <b>Leonelson</b> Palima")
	*/

	res.statusCode = 200
	res.setHeader("content-type", "application/json")
	res.end(JSON.stringify([
		{ nombre: "Leonelson" },
		{ nombre: "Andrea" },
		{ nombre: "Carlos" },
		{ nombre: "Maria" },
	]))

})

servidor.listen(3000)

console.log("Servidor ejecutandose")