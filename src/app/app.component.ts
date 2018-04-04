import { Component, OnInit } from '@angular/core';

import { DataService } from './service/data.service';
import { Item } from './model/item';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private address : string = "https://www.reddit.com/r/italian.json";
  public items : Item[];
  
  constructor(
    private dataService : DataService
  ) {}

  ngOnInit() {
    this.dataService.getData(this.address).subscribe(
      result => this.items = this.dataService.buildData(result)
    );
  }

  public update() : void {
    console.log("app update");
    this.dataService.getData(this.address).subscribe(
      result => this.items = this.dataService.buildData(result)
    );
  }
  
}