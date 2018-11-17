import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fecha = new Date()
  filtro: String = ""
  seleccion: String = "sinopsis"

   libros: Array<{}> = [
    {titulo: "Los gallinazos sin plumas", autor: "Julio Ramon", sinopsis: "Narra la historia de la gente que se gana la vida con la basura", anno: 1950},
    {titulo: "La ciudad de los perros", autor: "Mario Vargas Llosa", sinopsis: "kjahskjahsajhsajksakjshjasjajhks", anno: 1970},
    {titulo: "El sexto", autor: "Jose Maria Arguedas", sinopsis: "kshdkjahdadhadkjahdk  a d adjadhkh akjdhahjd ja ", anno: 1975},
    {titulo: "El perfume", autor: "Patrick Suskind", sinopsis: "hsdkjsahdfjksagfdh fgg fsjf gsdfjgsdjfhs", anno: 1940}
  ]
}
