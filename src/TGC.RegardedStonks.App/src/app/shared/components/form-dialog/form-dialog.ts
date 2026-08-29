import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, ValidatorFn, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export type FormDialogFieldType = 'text' | 'number' | 'currency';

export interface FormDialogField {
  key: string;
  label: string;
  type: FormDialogFieldType;
  required?: boolean;
  min?: number;
  placeholder?: string;
}

export interface FormDialogData<TValue extends Record<string, unknown> = Record<string, unknown>> {
  title: string;
  fields: FormDialogField[];
  submitLabel?: string;
  cancelLabel?: string;
  /** Called on submit; the dialog awaits it, shows a spinner meanwhile, and only closes (with its result) on success. */
  submit: (value: TValue) => Promise<unknown>;
}

/**
 * Generic "overlay with input fields" dialog. The field schema and the async submit handler are
 * both supplied via MAT_DIALOG_DATA, so this component itself stays fully content-agnostic and
 * reusable across features - only the data passed to `dialog.open()` changes.
 */
@Component({
  selector: 'app-form-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './form-dialog.html',
  styleUrl: './form-dialog.scss'
})
export class FormDialog {
  private readonly dialogRef = inject(MatDialogRef<FormDialog>);

  readonly data = inject<FormDialogData>(MAT_DIALOG_DATA);

  readonly submitting = signal(false);
  readonly error = signal<string | null>(null);

  readonly form = new FormGroup(
    Object.fromEntries(
      this.data.fields.map((field): [string, FormControl<string | number | null>] => {
        const validators: ValidatorFn[] = [];
        if (field.required) validators.push(Validators.required);
        if (field.type !== 'text' && field.min !== undefined) validators.push(Validators.min(field.min));
        return [field.key, new FormControl<string | number | null>(field.type === 'text' ? '' : null, { validators })];
      })
    )
  );

  async submit(): Promise<void> {
    if (this.submitting()) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    this.error.set(null);

    try {
      const result = await this.data.submit(this.form.getRawValue());
      this.dialogRef.close(result);
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
