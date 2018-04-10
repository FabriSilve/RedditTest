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

  private page : number = 1;
  
  constructor(
    private dataService : DataService,
    private appService : AppService
  ) {
    this.firstAccess = this.appService.isFirstAccess();
    this.itemsInPage = (this.dataService.getNumPage() === 0)? 10 : this.dataService.getNumPage();
    this.page = this.appService.getPage();
  }

  ngOnInit() {
    this.requestData(this.itemsInPage);

    //TODO KEEP RESEARCH PAGE AFTER FOCUS
    /*if(this.page > 1) {
      for(var i = 1; i <= this.page; i++) {
        console.log("for");
        var lastId : string = undefined;
        if(this.items.length > 0)
          lastId = this.items[this.items.length-1].id;
        this.requestData(this.itemsInPage, undefined, lastId);
      }
    }*/
  }

  ngDoCheck() {
    var that = this;
    setTimeout(function(){ that.goToSearch()}, 4000);
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
    if(this.itemsInPage > this.items.length) return;
    var lastId : string = undefined;
    if(this.items.length > 0)
      lastId = this.items[this.items.length-1].id;
    this.requestData(this.itemsInPage, undefined, lastId);
    this.onMove(true);
    this.page++;
    this.appService.pageNext();
  }
  
  public preview() {
    if(this.page == 1) return;
    var firstId : string = undefined;
    if(this.items.length > 0)
      firstId = this.items[0].id;
    this.requestData(this.itemsInPage, firstId, undefined);
    this.onMove(true);
    this.page--;
    this.appService.pagePrev();
  }

  public onSearch(s : string) {
    this.searchInput = s;
    this.requestData(this.itemsInPage);
    this.page = 1;
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

  public sortRecent() {
    this.items.sort((a, b) => b.created - a.created);
  }

  
}
