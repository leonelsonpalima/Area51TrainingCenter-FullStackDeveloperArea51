import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPipe'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<{}>, filtro: string, campo: string): Array<{}> {
    return value.filter(item => item[campo].indexOf(filtro)>= 0 ? true : false)
  }

}
