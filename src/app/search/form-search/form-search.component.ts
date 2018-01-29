import { Component, OnInit } from '@angular/core';
import { SearchService} from '../search.service';
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
  @Input()
  placeholder: string;
  @Output()
  searchEvent = new EventEmitter;

  constructor (private searchService: SearchService) {
    this.query = '';
  }

  ngOnInit() {
  }

  search() {
    this.searchEvent.emit({query: this.query, resultado: this.result});
  }

}


