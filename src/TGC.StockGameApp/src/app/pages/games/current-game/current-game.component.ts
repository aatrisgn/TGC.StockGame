// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

import { StockTableComponent } from 'src/app/components/stock-table/stock-table.component';
import { TemperatureSummaryComponent } from 'src/app/components/temperature-summary/temperature-summary.component';
@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [SharedModule, StockTableComponent, TemperatureSummaryComponent],
  providers: [],
  templateUrl: './current-game.component.html',
  styleUrls: ['./current-game.component.scss']
})
export default class DevicesComponent {

  // constructor
  constructor() {
  }

  ngOnInit() {

  }
}
