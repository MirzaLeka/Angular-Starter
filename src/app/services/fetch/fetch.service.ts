import { Injectable } from '@angular/core';
import { from, Observable, switchMap } from 'rxjs';
import ITodo from 'src/app/models/todo.model';
import { fromFetch } from 'rxjs/fetch';

// This service demonstrates how we can convert Fetch to Observable
@Injectable({
  providedIn: 'root'
})
export class FetchService {

  private readonly baseURL = 'https://jsonplaceholder.typicode.com/todos/1'

  constructor() { }

  standardFetch(): Promise<ITodo> {
    return fetch(this.baseURL)
      .then(((response: Response) => response.json()))
  }

  // Custom
  fetchToRx(): Observable<ITodo> {
    return from(fetch(this.baseURL))
      .pipe(
        switchMap((response: Response) => response.json())
      )
  }

  // Built-in
  rxFetch(): Observable<ITodo> {
    return fromFetch(this.baseURL)
      .pipe(
        switchMap((response: Response) => response.json())
      )
  }
}
