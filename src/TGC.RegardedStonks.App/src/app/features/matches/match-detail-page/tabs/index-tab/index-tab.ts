import { Component, computed, input } from '@angular/core';
import { IStockMatchEntity } from '../../../../../auto_generated/client/models';
import { DataTable, DataTableColumn } from '../../../../../shared/components/data-table/data-table';

interface CompanyRow extends Record<string, unknown> {
  name: string;
  shortName: string;
  price: number;
  availableStocks: number;
  totalStocks: number;
  lastReportedRevenue: number;
  lastReportedProfit: number;
  liquidAssets: number;
  nonLiquidAssets: number;
  longTermDebt: number;
  shortTermDebt: number;
  bankrupt: boolean;
  active: boolean;
}

const COMPANY_COLUMNS: DataTableColumn[] = [
  { key: 'name', label: 'Name' },
  { key: 'shortName', label: 'Short name' },
  { key: 'price', label: 'Price' },
  { key: 'availableStocks', label: 'Available stocks' },
  { key: 'totalStocks', label: 'Total stocks' },
  { key: 'lastReportedRevenue', label: 'Last reported revenue' },
  { key: 'lastReportedProfit', label: 'Last reported profit' },
  { key: 'liquidAssets', label: 'Liquid assets' },
  { key: 'nonLiquidAssets', label: 'Non-liquid assets' },
  { key: 'longTermDebt', label: 'Long-term debt' },
  { key: 'shortTermDebt', label: 'Short-term debt' },
  { key: 'bankrupt', label: 'Bankrupt' },
  { key: 'active', label: 'Active' }
];

function toNumber(value: { getValue(): unknown } | null | undefined): number {
  return Number(value?.getValue() ?? 0);
}

@Component({
  selector: 'app-index-tab',
  imports: [DataTable],
  templateUrl: './index-tab.html',
  styleUrl: './index-tab.scss'
})
export class IndexTab {
  readonly match = input.required<IStockMatchEntity>();

  protected readonly columns = COMPANY_COLUMNS;

  protected readonly rows = computed<CompanyRow[]>(() =>
    (this.match().stockCompanies ?? []).map((company) => ({
      name: company.name ?? '',
      shortName: company.shortName ?? '',
      price: toNumber(company.price),
      availableStocks: toNumber(company.availableStocks),
      totalStocks: toNumber(company.totalStocks),
      lastReportedRevenue: toNumber(company.lastReportedRevenue),
      lastReportedProfit: toNumber(company.lastReportedProfit),
      liquidAssets: toNumber(company.liquidAssets),
      nonLiquidAssets: toNumber(company.nonLiquidAssets),
      longTermDebt: toNumber(company.longTermDebt),
      shortTermDebt: toNumber(company.shortTermDebt),
      bankrupt: company.bankrupt ?? false,
      active: company.active ?? false
    }))
  );
}
