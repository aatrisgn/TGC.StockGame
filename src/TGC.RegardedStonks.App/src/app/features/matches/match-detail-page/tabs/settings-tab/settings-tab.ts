import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IStockMatchEntity } from '../../../../../auto_generated/client/models';
import { MatchApiService } from '../../../../../core/services/api-wrappers/match-api.service';
import { ConfirmDialog, ConfirmDialogData } from '../../../../../shared/components/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-settings-tab',
  imports: [MatButtonModule],
  templateUrl: './settings-tab.html',
  styleUrl: './settings-tab.scss'
})
export class SettingsTab {
  private readonly dialog = inject(MatDialog);
  private readonly matchApi = inject(MatchApiService);
  private readonly router = inject(Router);

  readonly match = input.required<IStockMatchEntity>();

  protected openDeleteMatchDialog(): void {
    const match = this.match();
    const data: ConfirmDialogData = {
      title: 'Delete match',
      message: `Are you sure you want to delete "${match.name}"? This action cannot be undone.`,
      confirmLabel: 'Delete',
      submit: () => this.matchApi.deleteMatch(match.id ?? '')
    };

    this.dialog
      .open(ConfirmDialog, { data, width: '420px' })
      .afterClosed()
      .subscribe((confirmed) => {
        if (confirmed) {
          this.router.navigate(['/matches']);
        }
      });
  }
}
