import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeetWriteDirective } from './leet-write/leet-write.directive';



@NgModule({
  declarations: [
    LeetWriteDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LeetWriteDirective
  ]
})
export class DirectivesModule { }
