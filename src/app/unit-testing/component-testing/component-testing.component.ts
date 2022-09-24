import { Component,OnDestroy, OnInit } from '@angular/core';
import { delay, filter, Subject, takeUntil } from 'rxjs';
import IPost from 'src/app/models/post.model';
import { ServiceTestingService } from '../service-testing/service-testing.service';

@Component({
  selector: 'app-component-testing',
  templateUrl: './component-testing.component.html',
  styleUrls: ['./component-testing.component.scss']
})
export class ComponentTestingComponent implements OnInit, OnDestroy {

  readonly unsubscriber$ = new Subject();

  serviceData: IPost[];

  constructor(private readonly service: ServiceTestingService) { }

  ngOnInit(): void {
    this.service.getAllPosts()
    .pipe(
      filter(x => !!x.length),
      delay(500),
      takeUntil(this.unsubscriber$)
    )
    .subscribe(data => this.serviceData = data)
  }

  addOrSubtract(a: number, b: number) {
    if (a > b) {
      return a - b;
    }
    return a + b;
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next(null);
    this.unsubscriber$.complete()
  }

}
