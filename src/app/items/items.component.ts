import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() public items : Item[];

  public currentId : string = "";
  public focusId : string = "";

  constructor() { }

  ngOnInit() { }

  public dateConverter(ms : number) : Date {
    return new Date(ms*1000);
  }


  public mouseIn(id : string) : any {
    this.currentId = id;
  }

  public mouseOut(id : string) : any {
    this.currentId = "";
  }

  public focusItem(id : string) {
    this.focusId = id;
  }

}
