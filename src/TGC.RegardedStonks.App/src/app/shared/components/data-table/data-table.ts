import { Component, computed, effect, input, viewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface DataTableColumn {
  key: string;
  label: string;
}

/**
 * Small, generic dense Material table wrapper - pass columns + rows, reuse across feature pages.
 * `sortable`/`filterable` default to false so existing callers keep today's plain-table behavior.
 */
@Component({
  selector: 'app-data-table',
  imports: [MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss'
})
export class DataTable<TRow extends Record<string, unknown>> {
  readonly columns = input.required<DataTableColumn[]>();
  readonly rows = input.required<TRow[]>();
  readonly sortable = input(false);
  readonly filterable = input(false);

  protected readonly columnKeys = computed(() => this.columns().map((column) => column.key));
  protected readonly dataSource = new MatTableDataSource<TRow>();

  private readonly sort = viewChild(MatSort);

  constructor() {
    this.dataSource.filterPredicate = (row) => {
      const filter = this.dataSource.filter;
      return Object.values(row).some((value) => String(value ?? '').toLowerCase().includes(filter));
    };

    effect(() => {
      this.dataSource.data = this.rows();
    });

    effect(() => {
      this.dataSource.sort = this.sort() ?? null;
    });
  }

  protected onFilterInput(event: Event): void {
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
  }
}
