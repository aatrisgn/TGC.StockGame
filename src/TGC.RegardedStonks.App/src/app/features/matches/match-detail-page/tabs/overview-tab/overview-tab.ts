import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { LineChartModule } from '@swimlane/ngx-charts';
import { IStockMatchEntity } from '../../../../../auto_generated/client/models';
import { MATCH_STATUS_LABELS, MatchStatus } from '../../../../../core/models/match-status.model';

interface DummySeriesPoint {
  name: string;
  value: number;
}

const DUMMY_MARKET_INDEX: { name: string; series: DummySeriesPoint[] }[] = [
  {
    name: 'Market index',
    series: [
      { name: 'Day 1', value: 100 },
      { name: 'Day 2', value: 104 },
      { name: 'Day 3', value: 101 },
      { name: 'Day 4', value: 109 },
      { name: 'Day 5', value: 112 },
      { name: 'Day 6', value: 108 },
      { name: 'Day 7', value: 117 }
    ]
  }
];

@Component({
  selector: 'app-overview-tab',
  imports: [CurrencyPipe, DatePipe, LineChartModule],
  templateUrl: './overview-tab.html',
  styleUrl: './overview-tab.scss'
})
export class OverviewTab {
  readonly match = input.required<IStockMatchEntity>();

  protected readonly dummyChartData = DUMMY_MARKET_INDEX;

  protected readonly statusLabel = computed(() => {
    const status = this.match().status as MatchStatus | undefined;
    return status !== undefined ? (MATCH_STATUS_LABELS[status] ?? 'Unknown') : 'Unknown';
  });

  protected readonly startingCapital = computed(() => Number(this.match().startingCapital?.getValue() ?? 0));
  protected readonly companyCount = computed(() => this.match().stockCompanies?.length ?? 0);
  protected readonly playerCount = computed(() => this.match().players?.length ?? 0);
}
