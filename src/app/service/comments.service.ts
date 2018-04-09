import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CommentsService {

  constructor( private http : HttpClient) { }

  public getComments(url : string) : Observable<any> {
    //console.log(url);
    return this.http.get<any>(url+".json")
    .pipe(
      tap(result => console.log("COMMENTS_GET")),
      catchError(this.handleError<any>('COMMENTS_GET', null))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
