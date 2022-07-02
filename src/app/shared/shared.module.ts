import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingModule } from './greeting/greeting.module';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    GreetingModule
  ]
})
export class SharedModule { }
