import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { IStockMatchEntity } from '../../../auto_generated/client/models';
import { MATCH_STATUS_LABELS, MatchStatus } from '../../../core/models/match-status.model';

type StatusVariant = 'positive' | 'negative' | 'pending' | 'neutral';

/** Bloomberg-terminal-style summary tile for a single match; presentational, no navigation of its own. */
@Component({
  selector: 'app-match-tile',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './match-tile.html',
  styleUrl: './match-tile.scss'
})
export class MatchTile {
  readonly match = input.required<IStockMatchEntity>();

  protected readonly statusLabel = computed(() => {
    const status = this.match().status as MatchStatus | undefined;
    return status !== undefined ? (MATCH_STATUS_LABELS[status] ?? 'Unknown') : 'Unknown';
  });

  protected readonly statusVariant = computed<StatusVariant>(() => {
    switch (this.match().status as MatchStatus) {
      case MatchStatus.Active:
        return 'positive';
      case MatchStatus.Cancelled:
      case MatchStatus.Failed:
      case MatchStatus.Abandoned:
        return 'negative';
      case MatchStatus.Created:
      case MatchStatus.Pending:
        return 'pending';
      default:
        return 'neutral';
    }
  });

  protected readonly startingCapital = computed(() => Number(this.match().startingCapital?.getValue() ?? 0));
}
