import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("f") formulario: NgForm

  grabar(){
    if(this.formulario.valid){

    }else{
      alert("El formulario no es válido")
    }
    console.log(this.formulario)
  }
}
