import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ITodo from '../../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  // BASEURL is already set in api.interceptor.ts

  constructor(private readonly httpClient: HttpClient) {}

   getAllTodos() {
     return this.httpClient.get<ITodo[]>('todos');
   }

   getTodoById(todoId: number) {
    return this.httpClient.get<ITodo>(`todos/${todoId}`);
   }
}
