import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Item } from '../model/models';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { AppService } from '../service/app.service';
import { CommentsService } from '../service/comments.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  host: {
    '(document:keydown)': 'onEscEvent($event)'
}
})
export class ItemComponent implements OnInit {

  public item : Item;
  public potrait : boolean = false;
  public comments : any;

  @ViewChild('image') image: ElementRef;

  constructor(
    private dataService : DataService,
    private appService : AppService,
    private commentsService : CommentsService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.item = this.appService.getFocusItem();
    if(!this.item) this.router.navigate(['/']);
    this.getComments();
  }

  public imageLoaded() {
    this.potrait = (this.image.nativeElement.height > this.image.nativeElement.width);
  }

  public close() {
    this.appService.clearFocus();
  }

  public dateConverter(ms : number) : Date {
    return new Date(ms*1000);
  }

  public getComments() {
    if(this.item == null) return;
    this.commentsService.getComments("https://www.reddit.com"+this.item.permalink.slice(0, -1)).subscribe(
      result => {
        this.comments = result[1].data.children;
      }
    );
  }

   private onEscEvent(event: KeyboardEvent) {
    if(event.keyCode === 27) { //ESC
      this.close();
      this.router.navigate(['/']);
    }
}

}
