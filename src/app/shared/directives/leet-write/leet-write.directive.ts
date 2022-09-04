import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLeetWrite]'
})
export class LeetWriteDirective {

  constructor(public ef: ElementRef) { }

  @HostListener('input', ['$event.target.value'])
  inputListener(value: string): void {
    const val = this.toReplace(value);
    this.ef.nativeElement.value = val;
  }

  private toReplace(text: string) {
    return text
    .replace(/a/gi, '4')
    .replace(/e/gi, '3')
    .replace(/i/gi, '1')
    .replace(/o/gi, '0')
    .replace(/t/gi, '7')
  }

}
