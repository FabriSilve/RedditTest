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
  public itemsInPage : number = 10;
  public loaded : boolean = false;

  public searchInput : string = "sweden";

  //private address : string = "https://www.reddit.com/r/"+this.searchInput+".json";
  
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

  public search() {
    console.log(this.searchInput);
    this.requestData(this.itemsInPage);
  }

  private addressBuilder(s : string) : string {
    return "https://www.reddit.com/r/"+s+".json";
  }
}
