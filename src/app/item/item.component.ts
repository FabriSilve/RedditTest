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

}
