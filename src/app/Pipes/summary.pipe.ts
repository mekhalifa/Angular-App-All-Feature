import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number, ...args: unknown[]): unknown {
    if (value == null) {
        return null;
    }
    const limitShow = (limit == null) ? 10 : limit;
    const valueShow = value.slice(0, limitShow);
    return valueShow + '...';
  }

}
