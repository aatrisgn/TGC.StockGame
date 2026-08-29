import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AdminPlayerApiService } from '../../../core/services/api-wrappers/admin-player-api.service';
import { DataTable, DataTableColumn } from '../../../shared/components/data-table/data-table';
import { FormDialog, FormDialogData } from '../../../shared/components/form-dialog/form-dialog';

interface PlayerRow extends Record<string, unknown> {
  id: string;
  oid: string;
  created: string;
  username: string;
}

const PLAYER_COLUMNS: DataTableColumn[] = [
  { key: 'id', label: 'Id' },
  { key: 'oid', label: 'Oid' },
  { key: 'created', label: 'Created' },
  { key: 'username', label: 'Username' }
];

@Component({
  selector: 'app-admin-players-page',
  imports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule, DataTable],
  templateUrl: './admin-players-page.html',
  styleUrl: './admin-players-page.scss'
})
export class AdminPlayersPage {
  private readonly playerApi = inject(AdminPlayerApiService);
  private readonly dialog = inject(MatDialog);

  protected readonly columns = PLAYER_COLUMNS;
  protected readonly isLoading = this.playerApi.isLoading;

  protected readonly rows = computed<PlayerRow[]>(() =>
    this.playerApi.players().map((player) => ({
      id: player.id ?? '',
      oid: player.oid ?? '',
      created: player.created?.toLocaleString() ?? '',
      username: player.username ?? ''
    }))
  );

  protected openAddPlayerDialog(): void {
    const data: FormDialogData<{ oid: string; userName: string }> = {
      title: 'Add player',
      submitLabel: 'Add',
      fields: [
        { key: 'oid', label: 'OID', type: 'text', required: true },
        { key: 'userName', label: 'Username', type: 'text', required: true }
      ],
      submit: (value) => this.playerApi.addPlayer(value.oid, value.userName)
    };

    this.dialog.open(FormDialog, { data, width: '420px' });
  }
}
