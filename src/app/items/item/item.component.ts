import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../model/item';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() public item : Item;
  @Output() public onClose : EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public close() {
    console.log("close");
    this.onClose.emit(true);
  }

}
