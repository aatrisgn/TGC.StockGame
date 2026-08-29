import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-match-detail-page',
  imports: [],
  templateUrl: './match-detail-page.html',
  styleUrl: './match-detail-page.scss'
})
export class MatchDetailPage {
  private readonly route = inject(ActivatedRoute);

  protected readonly matchId = toSignal(this.route.paramMap.pipe(map((params) => params.get('id'))), {
    initialValue: null
  });
}
