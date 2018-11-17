import { Component } from '@angular/core';

FileList.prototype["forEach"] = function(callback){
  [].forEach.call(this, callback)
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aplicarClase: boolean = false

  seleccion(archivos: FileList){
    archivos["forEach"](archivo => {
      const lector: FileReader = new FileReader()
      lector.onload = e => {
        console.log(e.target["result"])
      }
      lector.readAsDataURL(archivo)
    })
  }
}
