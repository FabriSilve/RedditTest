import { Injectable } from '@angular/core';
import { Item } from '../model/models'

@Injectable()
export class AppService {

  private focus : Item = null;
  private firstAccess : boolean = true;

  constructor() { }

  public setFocus(item : Item ) : void {
    this.focus = item;
  }

  public getFocusItem() : Item {
    return this.focus;
  }

  public clearFocus() : void {
    this.focus = null;
  }

  public isFirstAccess() : boolean {
    return this.firstAccess;
  }

  public doneFirstAccess() : void {
    this.firstAccess = false;
  }

}