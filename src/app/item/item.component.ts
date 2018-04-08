import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Item } from '../model/models';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

 /* @Output() public onClose : EventEmitter<boolean> = new EventEmitter();*/
  public item : Item;
  public potrait : boolean = false;

  @ViewChild('image') image: ElementRef;

  constructor(
    private dataService : DataService,
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.item = this.dataService.getFocusItem();
    if(!this.item) this.router.navigate(['/search']);   
  }

  public imageLoaded() {
    this.potrait = (this.image.nativeElement.height > this.image.nativeElement.width);
  }


  public close() {
    this.dataService.clearFocus();
    /*this.onClose.emit(true);*/
  }

  public dateConverter(ms : number) : Date {
    return new Date(ms*1000);
  }

}
