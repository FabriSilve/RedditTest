import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() goToBody : EventEmitter<boolean> = new EventEmitter();

 

  constructor( ) { }

  ngOnInit() {
  }

  public onClick() {
    this.goToBody.emit(true);
  }

}
