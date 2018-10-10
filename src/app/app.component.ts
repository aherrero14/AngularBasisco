import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public event;


  public msgEventSearch: string;

  constructor() {}

  searchEvent(e) {
    this.event = e;
  }

}
