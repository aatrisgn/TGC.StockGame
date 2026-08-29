import { Component, computed, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface DataTableColumn {
  key: string;
  label: string;
}

/** Small, generic dense Material table wrapper - pass columns + rows, reuse across feature pages. */
@Component({
  selector: 'app-data-table',
  imports: [MatTableModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss'
})
export class DataTable<TRow extends Record<string, unknown>> {
  readonly columns = input.required<DataTableColumn[]>();
  readonly rows = input.required<TRow[]>();

  protected readonly columnKeys = computed(() => this.columns().map((column) => column.key));
}
