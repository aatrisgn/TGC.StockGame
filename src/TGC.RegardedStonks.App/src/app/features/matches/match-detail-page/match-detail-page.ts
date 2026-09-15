import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MatchDetailApiService } from '../../../core/services/api-wrappers/match-detail-api.service';
import { RUNTIME_CONFIG } from '../../../core/models/runtime-config.model';
import { DebugTab } from './tabs/debug-tab/debug-tab';
import { IndexTab } from './tabs/index-tab/index-tab';
import { OverviewTab } from './tabs/overview-tab/overview-tab';
import { PublicHistoryTab } from './tabs/public-history-tab/public-history-tab';
import { SettingsTab } from './tabs/settings-tab/settings-tab';
import { StandingTab } from './tabs/standing-tab/standing-tab';

@Component({
  selector: 'app-match-detail-page',
  imports: [
    MatTabsModule,
    MatProgressSpinnerModule,
    OverviewTab,
    IndexTab,
    StandingTab,
    PublicHistoryTab,
    SettingsTab,
    DebugTab
  ],
  templateUrl: './match-detail-page.html',
  styleUrl: './match-detail-page.scss'
})
export class MatchDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly matchDetailApi = inject(MatchDetailApiService);
  protected readonly runtimeConfig = inject(RUNTIME_CONFIG);

  protected readonly matchId = toSignal(this.route.paramMap.pipe(map((params) => params.get('id'))), {
    initialValue: null
  });

  protected readonly isLoading = this.matchDetailApi.isLoading;
  protected readonly match = this.matchDetailApi.match;
  protected readonly rawResponse = this.matchDetailApi.rawResponse;

  constructor() {
    effect(() => {
      this.matchDetailApi.setMatchId(this.matchId() ?? undefined);
    });
  }
}
