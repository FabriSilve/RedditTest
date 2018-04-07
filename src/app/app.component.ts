import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { DataService } from './service/data.service';
import { Item } from './model/item';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('body') public body : ElementRef;
  
  public items : Item[] = [];
  public loaded : boolean = false;

  private searchInput : string = "";
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

  private requestData(n : number, idPrev? : string, idNext? : string ) : void {
    var address : string = this.addressBuilder(this.searchInput)+"?limit="+n;
    if(idPrev) {
      address += "&before=t3_"+idPrev;
    }
    if(idNext) {
      address += "&after=t3_"+idNext;
    }
    this.dataService.getData(address).subscribe(
      result => {
        if(result != null) this.items = this.dataService.buildData(result);
        this.loaded = true;
      }
    );
  }

  public next() {
    var lastId : string = undefined;
    if(this.items.length > 0)
      lastId = this.items[this.items.length-1].id;
    this.requestData(this.itemsInPage, undefined, lastId);
  }
  
  public preview() {
    var firstId : string = undefined;
    if(this.items.length > 0)
      firstId = this.items[0].id;
    this.requestData(this.itemsInPage, firstId, undefined);
  }

  public onSearch(s : string) {
    this.searchInput = s;
    this.requestData(this.itemsInPage);
  }

  public onNumPage(n : number) {
    this.itemsInPage = n;
    this.requestData(this.itemsInPage);
  }

  public onMove(b : boolean) {
    if(b) {
      this.body.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    }
  }

  public sortByScore() {
    this.items.sort((a, b) => b.score - a.score);
  }

  public sortByComments() {
    this.items.sort((a, b) => b.num_comments - a.num_comments);
  }

  private addressBuilder(s : string) : string {
    if(s === "") s = "sweden";
    return "https://www.reddit.com/r/"+s+".json";
  }
}
