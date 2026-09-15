import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export interface ConfirmDialogData {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  /** Called on confirm; the dialog awaits it, shows a spinner meanwhile, and only closes (with `true`) on success. */
  submit: () => Promise<unknown>;
}

/**
 * Generic "are you sure?" dialog for destructive/irreversible async actions. The copy and the
 * async submit handler are both supplied via MAT_DIALOG_DATA, so this component itself stays
 * fully content-agnostic and reusable across features - only the data passed to `dialog.open()`
 * changes.
 */
@Component({
  selector: 'app-confirm-dialog',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './confirm-dialog.html',
  styleUrl: './confirm-dialog.scss'
})
export class ConfirmDialog {
  private readonly dialogRef = inject(MatDialogRef<ConfirmDialog>);

  readonly data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);

  readonly submitting = signal(false);
  readonly error = signal<string | null>(null);

  async confirm(): Promise<void> {
    if (this.submitting()) return;

    this.submitting.set(true);
    this.error.set(null);

    try {
      await this.data.submit();
      this.dialogRef.close(true);
    } catch (err) {
      this.error.set(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      this.submitting.set(false);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
