// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

import { GameTableComponent } from 'src/app/components/game-table/game-table.component';
@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [SharedModule, GameTableComponent],
  providers: [],
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})
export default class DevicesComponent {

  constructor() {
  }

  ngOnInit() {

  }
}
