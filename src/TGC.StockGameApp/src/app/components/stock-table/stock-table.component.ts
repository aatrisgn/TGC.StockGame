import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-stock-table',
  imports: [SharedModule],
  templateUrl: './stock-table.component.html',
  styleUrl: './stock-table.component.scss',
  standalone: true
})
export class StockTableComponent {

}
