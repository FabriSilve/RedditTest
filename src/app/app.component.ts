import { Component, OnInit } from '@angular/core';

import { DataService } from './service/data.service';
import { Item } from './model/item';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  public items : Item[];
  public loaded : boolean = false;

  private searchInput : string = "sweden";
  private itemsInPage : number = 10;
  
  constructor(
    private dataService : DataService
  ) {}

  ngOnInit() {
    this.requestData(this.itemsInPage);
  }

  public update(n : number) : void {
    this.itemsInPage = n;
    this.loaded = false;
    this.requestData(n);
  }

  private requestData(n : number) : void {
    this.dataService.getData(this.addressBuilder(this.searchInput)+"?limit="+(n-1)).subscribe(
      result => {
        this.items = this.dataService.buildData(result);
        this.loaded = true;
      }
    );
  }

  public next() {
    console.log("next click");
  }
  
  public preview() {
    console.log("prev click");
  }

  public onSearch(s : string) {
    this.searchInput = s;
    this.requestData(this.itemsInPage);
  }

  public onNumPage(n : number) {
    this.itemsInPage = n;
    this.requestData(this.itemsInPage);
  }

  private addressBuilder(s : string) : string {
    return "https://www.reddit.com/r/"+s+".json";
  }
}
