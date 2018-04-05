import { Component, OnInit } from '@angular/core';

import { DataService } from './service/data.service';
import { Item } from './model/item';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private address : string = "https://www.reddit.com/r/sweden.json";
  public items : Item[];
  public itemsInPage : number = 10;
  public loaded : boolean = false;
  
  constructor(
    private dataService : DataService
  ) {}

  ngOnInit() {
    this.dataService.getData(this.address).subscribe(
      result => {
        this.items = this.dataService.buildData(result);
        this.loaded = true;
      }
    );
  }

  public update(n : number) : void {
    this.itemsInPage = n;
    this.loaded = false;
    this.dataService.getData(this.address+"?limit="+(n-1)).subscribe(
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
}
