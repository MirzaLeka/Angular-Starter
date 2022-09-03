import { Component } from '@angular/core';
import { filter, map, Observable, Subject, takeUntil } from 'rxjs';
import ITodo from './models/todo.model';
import { FetchService } from './services/fetch/fetch.service';
import { TodosService } from './services/todos/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos$?: Observable<string[]>;
  subject$ = new Subject();

  constructor(private readonly todosService: TodosService, private readonly fetchService: FetchService) {}

  ngOnInit(): void {
    this.todos$ = this.todosService.getAllTodos().pipe(
      filter((x: ITodo[]) => !!x),
      map((todos: ITodo[]) => todos.filter((t) => t.completed)),
      map((todos: ITodo[]) => todos.map((t) => t.title)),
      takeUntil(this.subject$)
    );

    // this.compareFetch()
  }

  ngOnDestroy(): void {
    this.subject$.next(0);
    this.subject$.complete();
  }

//   private compareFetch(): void {
//     this.fetchService.standardFetch().then((data: ITodo) => console.log('STANDARD FETCH: ', data))
//     this.fetchService.fetchToRx().subscribe((data: ITodo) => console.log('FETCH TO RX: ', data))
//     this.fetchService.rxFetch().subscribe((data: ITodo) => console.log('FROM FETCH: ', data))
//   }
}
