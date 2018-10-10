import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  public query: string;
  public result: string;

  @Input()
  labelButton: string;

  @Output()
  searchEvent = new EventEmitter;

  constructor () {
    this.query = '';
  }

  ngOnInit() {
  }

  search() {
    this.result = 'Resultado para la búsqueda ' + this.query;
    this.searchEvent.emit({query: this.query, resultado: this.result});
  }

}


