import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() public items : Item[];
  public date : Date;
  public count : number = 2;

  constructor() { }

  ngOnInit() {
    //this.date =  this.dateConverter(this.item.created);
    
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

  public checkImg() : void {
    console.log("ciao");
  }
}
