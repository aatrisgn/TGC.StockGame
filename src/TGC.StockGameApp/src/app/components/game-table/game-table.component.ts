import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-game-table',
  imports: [SharedModule],
  templateUrl: './game-table.component.html',
  styleUrl: './game-table.component.scss',
  standalone: true
})
export class GameTableComponent {

}
