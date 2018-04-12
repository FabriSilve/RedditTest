import { Injectable } from '@angular/core';
import { Item } from '../model/models'

@Injectable()
export class AppService {

  private firstAccess : boolean = true;
  private page : number = 1;
  private lastId : string = "";

  constructor() { }

  public isFirstAccess() : boolean { return this.firstAccess; }

  public doneFirstAccess() : void { this.firstAccess = false; }

  public setPage(n : number) { this.page = n; }

  public getPage() : number { return this.page; }

  public setLasttId(id : string) { this.lastId = id; }

  public getLasttId() : string { return this.lastId; }

}
