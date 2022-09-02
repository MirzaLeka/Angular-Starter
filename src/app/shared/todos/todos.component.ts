import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  // Todos component is a pure/presentational component as it does not contain any business logic

  @Input() todos: string[] | null = [];

}
