import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'firstLetter'})
export class FirstLetterPipe implements PipeTransform {
  transform(value: string) {
    let words: string[] = value.split(' ');
    return words.map((word: string) => {
      return word.charAt(0);
    }).join('');
  }
}
