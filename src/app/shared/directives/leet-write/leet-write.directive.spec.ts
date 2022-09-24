import { ElementRef } from '@angular/core';
import { LeetWriteDirective } from './leet-write.directive';

describe('LeetWriteDirective', () => {
  it('should create an instance', () => {
    const directive = new LeetWriteDirective({} as ElementRef);
    expect(directive).toBeTruthy();
  });
});
