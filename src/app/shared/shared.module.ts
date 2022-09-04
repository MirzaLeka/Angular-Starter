import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingModule } from './components/greeting/greeting.module';
import { TodosModule } from './components/todos/todos.module';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    GreetingModule,
    TodosModule,
  ],
})
export class SharedModule { }
