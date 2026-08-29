import { Pipe, PipeTransform } from '@angular/core';

/** Maps a numeric change (e.g. price delta) to a CSS class for up/down/flat coloring. */
@Pipe({
  name: 'tickerColor'
})
export class TickerColorPipe implements PipeTransform {
  transform(change: number | null | undefined): string {
    if (!change) return '';
    return change > 0 ? 'ticker-value--up' : 'ticker-value--down';
  }
}
