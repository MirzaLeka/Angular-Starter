import { Directive, EventEmitter, HostListener, OnDestroy, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map, of, Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[appDirectiveTesting]'
})
export class DirectiveTestingDirective implements OnDestroy {

  @Output() textEmitter = new EventEmitter();
  readonly unsubscriber$ = new Subject();

  @HostListener('input', ['$event.target.value'])
  handleInput(value: string): void {
    of(value)
      .pipe(
        map(text => text.trim()),
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged(),
        takeUntil(this.unsubscriber$)
      )
      .subscribe(this.textEmitter.emit)
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next(0)
    this.unsubscriber$.complete();
  }

}
