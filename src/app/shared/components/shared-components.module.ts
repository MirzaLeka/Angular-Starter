import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingModule } from './greeting/greeting.module';
import { TodosModule } from './todos/todos.module';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    GreetingModule,
    TodosModule,
  ]
})
export class SharedComponentsModule { }
