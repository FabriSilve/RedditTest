import { Injectable } from '@angular/core';
import { Item } from '../model/models'

@Injectable()
export class AppService {

  private focus : Item = null;

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

}
