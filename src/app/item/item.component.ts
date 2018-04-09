import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Item } from '../model/models';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { AppService } from '../service/app.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public item : Item;
  public potrait : boolean = false;

  @ViewChild('image') image: ElementRef;

  constructor(
    private dataService : DataService,
    private appService : AppService,
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.item = this.appService.getFocusItem();
    if(!this.item) this.router.navigate(['/']);   
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

}
