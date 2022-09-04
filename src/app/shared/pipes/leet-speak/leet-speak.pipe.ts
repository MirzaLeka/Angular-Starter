import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leetSpeak'
})
export class LeetSpeakPipe implements PipeTransform {

  transform(value: string, includeSpecial?: string): string {

    const changedValue = this.toReplace(value);

    if (!includeSpecial) {
      return changedValue;
    }
    const includedLetter = new RegExp(includeSpecial, 'gi')
    return changedValue.replace(includedLetter, '⭐');

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
