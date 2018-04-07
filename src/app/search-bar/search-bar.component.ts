import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public searchInput : string = "sweden";
  public itemsInPage : number = 10;

  @Output() search: EventEmitter<string> = new EventEmitter();
  @Output() itemsNum : EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSearch() {
    this.search.emit(this.searchInput.replace(/\s/g, "-"));
  }

  public onPageChange(n : number) {
    this.itemsInPage = n;
    this.itemsNum.emit(n);
  }

}
