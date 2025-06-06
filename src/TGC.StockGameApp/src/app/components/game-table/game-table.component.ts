import { Component } from '@angular/core';
import { GameClient, GameResponse } from 'src/app/generated/autogenerated-client';
import { CurrentGameState } from 'src/app/services/CurrentGameState.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-game-table',
  imports: [SharedModule],
  templateUrl: './game-table.component.html',
  styleUrl: './game-table.component.scss',
  providers: [GameClient],
  standalone: true
})
export class GameTableComponent {
  constructor(private gameClient:GameClient, private currentGameStateService:CurrentGameState){
    this.currentGameStateService.$newGameAddedEvent.subscribe(data => {
      this.loadAllGames();
    });
  }

  public allGames:GameResponse[] | undefined;

  ngOnInit(){
    this.loadAllGames();
  }

  loadAllGames(){
    this.gameClient.getAllGames().subscribe(response => {
      this.allGames = response;
    })
  }

  setCurrentGameId(id:string){
    this.gameClient.getGameById(id).subscribe(response => {
      this.currentGameStateService.setGameId(id);
      this.currentGameStateService.emitReloadGameEvent(response);
    })
  }
}
