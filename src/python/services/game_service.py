from typing import List
from uuid import uuid4
from models.game import GameEntity

class GameService:
    
    game_entities: List[GameEntity] = []
    

    def create_game(self):
        game_id = str(uuid4())
        game = GameEntity(id=game_id, name=f"Game-{game_id[:6]}")
        
        self.game_entities.append(game)
        
        return game_id

    def get_game(self, game_id):
        return self.games.get(game_id)
    
    def get_all_game(self, game_id):
        return self.games.get(game_id)

    def advance_day(self, game_id):
        game = self.games.get(game_id)
        if game:
            game.day += 1
            game.state[f"day_{game.day}"] = f"Events for day {game.day}"
        return game