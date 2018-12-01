import { EventEmitter } from "events";

export class Reloj extends EventEmitter { //Para exportar

	iniciar() {
		setInterval(() => {
			const fecha = new Date()
			this.emit("fecha actual", fecha.toTimeString())
		}, 1000)
	}

}

//export default Reloj //Para exportar
//export {Reloj} //Para exportar