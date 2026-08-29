import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Theme } from '../../../core/services/theme';
import { PlayerApiService } from '../../../core/services/api-wrappers/player-api.service';
import { FormDialog, FormDialogData } from '../../../shared/components/form-dialog/form-dialog';

@Component({
  selector: 'app-settings-page',
  imports: [MatButtonModule, MatSlideToggleModule],
  templateUrl: './settings-page.html',
  styleUrl: './settings-page.scss'
})
export class SettingsPage {
  protected readonly theme = inject(Theme);
  protected readonly playerApi = inject(PlayerApiService);
  private readonly dialog = inject(MatDialog);

  toggleTheme(): void {
    this.theme.toggle();
  }

  protected openChangeUsernameDialog(): void {
    const data: FormDialogData<{ username: string }> = {
      title: 'Change username',
      submitLabel: 'Save',
      fields: [{ key: 'username', label: 'Username', type: 'text', required: true }],
      submit: (value) => this.playerApi.updateUsername(value.username)
    };

    this.dialog.open(FormDialog, { data, width: '420px' });
  }
}
