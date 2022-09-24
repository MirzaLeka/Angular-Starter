import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentTestingComponent } from './component-testing/component-testing.component';
import { DirectiveTestingDirective } from './directive-testing/directive-testing.directive';
import { PipeTestingPipe } from './pipe-testing/pipe-testing.pipe';
import { ServiceTestingService } from './service-testing/service-testing.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ComponentTestingComponent,
    DirectiveTestingDirective,
    PipeTestingPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ServiceTestingService
  ]
})
export class UnitTestingModule { }
