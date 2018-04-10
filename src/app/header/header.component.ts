import { Component, Output, EventEmitter } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() goToBody : EventEmitter<boolean> = new EventEmitter();

  constructor( ) { }

  public onClick() {
    this.goToBody.emit(true);
  }

}
