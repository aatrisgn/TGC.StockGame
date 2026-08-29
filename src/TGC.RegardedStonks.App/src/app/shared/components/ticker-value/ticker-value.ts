import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';

/** Small reusable component for displaying a numeric value colored by up/down change, Bloomberg-terminal style. */
@Component({
  selector: 'app-ticker-value',
  imports: [CurrencyPipe, DecimalPipe],
  templateUrl: './ticker-value.html',
  styleUrl: './ticker-value.scss'
})
export class TickerValue {
  readonly value = input.required<number>();
  readonly change = input<number>(0);
  readonly format = input<'currency' | 'number'>('currency');

  protected readonly direction = computed<'up' | 'down' | 'flat'>(() => {
    const change = this.change();
    if (change > 0) return 'up';
    if (change < 0) return 'down';
    return 'flat';
  });
}
