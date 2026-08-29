import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface ErrorDialogData {
  traceId: string;
  sessionId: string;
  message: string;
}

@Component({
  selector: 'app-error-dialog',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButtonModule],
  templateUrl: './error-dialog.html',
  styleUrl: './error-dialog.scss'
})
export class ErrorDialog {
  private readonly dialogRef = inject(MatDialogRef<ErrorDialog>);

  readonly data = inject<ErrorDialogData>(MAT_DIALOG_DATA);

  close(): void {
    this.dialogRef.close();
  }
}
