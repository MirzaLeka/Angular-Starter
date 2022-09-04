import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting.component';
import { DirectivesModule } from '../../directives/directives.module';



@NgModule({
  declarations: [
    GreetingComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    GreetingComponent
  ]
})
export class GreetingModule { }
