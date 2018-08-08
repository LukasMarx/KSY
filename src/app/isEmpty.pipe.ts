import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEmpty'
})
export class IsEmptyPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return this.isEmpty(value);
  }

  isEmpty(s: string) {
    const isNotEmpty = /\S+/gm;
    const result = s.match(isNotEmpty);
    return result == null;
  }
}
