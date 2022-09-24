import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTesting'
})
export class PipeTestingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
