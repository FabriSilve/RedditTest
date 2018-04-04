import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() public item : Item;
  public date : Date;

  constructor() { }

  ngOnInit() {
    this.date =  this.dateConverter(this.item.created);
  }

  public dateConverter(ms : number) : Date {
    return new Date(ms*1000);
  }

  public focus(id : string) {
    console.log(id + " clicked");
  }

  public mouseIn(id : string) : any {
    console.log("mouse in "+id);
  }

  public mouseOut(id : string) : any {
    console.log("mouse out "+id);
  }
}
