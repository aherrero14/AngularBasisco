import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public labelBuscar ='Buscar';
  public labelPlaceHolder = 'Escriba el texto a buscar';

  public msgEventSearch: string;

  constructor(){}

  search(event) {
    this.msgEventSearch = event.query + ' => ' + event.resultado;
  }

}
