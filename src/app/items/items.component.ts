import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '../model/models';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  @Input() public items : Item[];
  @Output() public onFocus : EventEmitter<Item> = new EventEmitter();

  public currentId : string = "";

  constructor() { }

  public dateConverter(s : number) : Date {
    return new Date(s*1000);
  }

  public focusItem(item : Item) {
    //this.onFocus.emit(item);
  }
}
