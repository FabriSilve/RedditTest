import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Item, ServerDataFull } from '../model/item';


@Injectable()
export class DataService {

  constructor( private http : HttpClient) { }


  public getData(address : string) : Observable<ServerDataFull> {
    return this.http.get<ServerDataFull>(address)
    .pipe(
      tap(result => console.log("DATA_GET")),
      catchError(this.handleError<ServerDataFull>('DATA_GET', null))
    );
  }

  public buildData(data : ServerDataFull) : Item[] {
    if(data == null) {
      console.error("data null");
      return [];
    }   

    var items : Array<Item> = new Array<Item>();
    data.data.children.forEach(element => {
      items.push(element.data);
    });
    return items;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }

}
