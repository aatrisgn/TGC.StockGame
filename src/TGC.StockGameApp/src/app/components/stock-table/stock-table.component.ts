import { Component } from '@angular/core';
import { GameClient, GameResponse } from 'src/app/generated/autogenerated-client';
import { CurrentGameState } from 'src/app/services/CurrentGameState.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { GameTableComponent } from "../progress-stocks-button/progress-stocks-button.component";

@Component({
  selector: 'app-stock-table',
  imports: [SharedModule, GameTableComponent],
  templateUrl: './stock-table.component.html',
  styleUrl: './stock-table.component.scss',
  providers: [GameClient],
  standalone: true
})
export class StockTableComponent {

  currentGameId:string;
  gameData:GameResponse | undefined;

  constructor(private currentStateService:CurrentGameState, private gameClient:GameClient){
    this.currentGameId = currentStateService.getGameId();
    this.currentStateService.$gameProgressedEvent.subscribe(data => {
      this.gameData = data;
    })
  }

  ngOnInit(){
    if(this.currentGameId != ""){
      this.gameClient.getGameById(this.currentGameId).subscribe(response => {
        this.gameData = response;
      })
    }
  }

  formatAsCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  }
}
