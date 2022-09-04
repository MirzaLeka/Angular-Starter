import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeetSpeakPipe } from './leet-speak/leet-speak.pipe';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LeetSpeakPipe
  ],
  exports: [
    LeetSpeakPipe
  ]
})
export class PipesModule { }
