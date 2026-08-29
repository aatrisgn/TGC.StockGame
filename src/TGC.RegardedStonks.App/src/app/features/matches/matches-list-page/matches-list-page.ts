import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule, MatSelectChange } from '@angular/material/select';
import { IStockMatchEntity } from '../../../auto_generated/client/models';
import { MATCH_STATUS_OPTIONS, MatchStatus } from '../../../core/models/match-status.model';
import { MatchApiService } from '../../../core/services/api-wrappers/match-api.service';
import { FormDialog, FormDialogData } from '../../../shared/components/form-dialog/form-dialog';
import { MatchTile } from '../../../shared/components/match-tile/match-tile';

type SortField = 'created' | 'name';

const MAX_VISIBLE_MATCHES = 10;

@Component({
  selector: 'app-matches-list-page',
  imports: [RouterLink, MatButtonModule, MatFormFieldModule, MatIconModule, MatSelectModule, MatProgressSpinnerModule, MatchTile],
  templateUrl: './matches-list-page.html',
  styleUrl: './matches-list-page.scss'
})
export class MatchesListPage {
  private readonly matchApi = inject(MatchApiService);
  private readonly dialog = inject(MatDialog);

  protected readonly statusOptions = MATCH_STATUS_OPTIONS;
  protected readonly statusFilter = signal<MatchStatus | null>(null);
  protected readonly sortField = signal<SortField>('created');
  protected readonly sortDirection = signal<'asc' | 'desc'>('desc');

  protected readonly isLoading = this.matchApi.isLoading;

  protected readonly visibleMatches = computed<IStockMatchEntity[]>(() => {
    const status = this.statusFilter();
    const field = this.sortField();
    const direction = this.sortDirection();

    const filtered = status === null ? this.matchApi.matches() : this.matchApi.matches().filter((match) => match.status === status);

    const sorted = [...filtered].sort((a, b) => {
      const comparison =
        field === 'name' ? (a.name ?? '').localeCompare(b.name ?? '') : (a.created?.getTime() ?? 0) - (b.created?.getTime() ?? 0);
      return direction === 'asc' ? comparison : -comparison;
    });

    return sorted.slice(0, MAX_VISIBLE_MATCHES);
  });

  protected setStatusFilter(event: MatSelectChange<MatchStatus | null>): void {
    this.statusFilter.set(event.value);
  }

  protected setSortField(event: MatSelectChange<SortField>): void {
    this.sortField.set(event.value);
  }

  protected toggleSortDirection(): void {
    this.sortDirection.update((direction) => (direction === 'asc' ? 'desc' : 'asc'));
  }

  protected openCreateMatchDialog(): void {
    const data: FormDialogData<{ name: string; startingCapital: number }> = {
      title: 'Create match',
      submitLabel: 'Create',
      fields: [
        { key: 'name', label: 'Match name', type: 'text', required: true },
        { key: 'startingCapital', label: 'Starting capital', type: 'currency', required: true, min: 0 }
      ],
      submit: (value) => this.matchApi.createMatch(value.name, Number(value.startingCapital))
    };

    this.dialog.open(FormDialog, { data, width: '420px' });
  }
}
