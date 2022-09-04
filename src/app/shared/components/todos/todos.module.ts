import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
