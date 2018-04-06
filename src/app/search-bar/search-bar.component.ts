import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public searchInput : string = "sweden";

  @Output() search: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSearch() {
    this.search.emit(this.searchInput);
  }

}
