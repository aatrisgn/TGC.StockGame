import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // This ensures the service is a singleton
})
export class CurrentGameState {
  private gameId:string = "";
  private localStorageKey = "currentGameId"

  constructor() {
    console.log('Singleton service instance created');
  }

  setGameId(id:string): void {
    this.gameId = id;
    localStorage.setItem(this.localStorageKey, id);
  }

  getGameId(): string {
    return localStorage.getItem(this.localStorageKey)!;
  }
}
