import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Item } from '../model/models';
import { DataService } from '../service/data.service';
import { AppService } from '../service/app.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('body') public body : ElementRef;
  
  public items : Item[] = [];
  public loaded : boolean = false;

  private searchInput : string = "";
  private itemsInPage : number = 10;
  public firstAccess : boolean;
  
  constructor(
    private dataService : DataService,
    private appService : AppService
  ) {
    this.firstAccess = this.appService.isFirstAccess();
    this.itemsInPage = (this.dataService.getNumPage() === 0)? 10 : this.dataService.getNumPage();
    /*setTimeout(this.goToSearch(), 10000);*/
    var that = this;
    setTimeout(function(){ that.goToSearch()}, 3000);
  }

  ngOnInit() {
    this.requestData(this.itemsInPage);
  }

  public update(n : number) : void {
    this.itemsInPage = n;
    this.loaded = false;
    this.requestData(n);
  }

  private requestData(n : number, idPrev? : string, idNext? : string ) : void {
    this.dataService.setSearch(this.searchInput);
    this.dataService.getData(n, idPrev, idNext).subscribe(
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
    this.onMove(true);
  }
  
  public preview() {
    var firstId : string = undefined;
    if(this.items.length > 0)
      firstId = this.items[0].id;
    this.requestData(this.itemsInPage, firstId, undefined);
    this.onMove(true);
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
    this.body.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }

  public goToSearch() {
    if(this.firstAccess) {
      this.appService.doneFirstAccess();
      this.firstAccess = false;
    }
  }

  public onFocus(item : Item) {
    this.appService.setFocus(item);
  }

  public sortByScore() {
    this.items.sort((a, b) => b.score - a.score);
  }

  public sortByComments() {
    this.items.sort((a, b) => b.num_comments - a.num_comments);
  }

  
}
