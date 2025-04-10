from fastapi import APIRouter, HTTPException
from schemas.game import GameSchema, GameCreateResponse
from services.game_service import GameService

router = APIRouter()
service = GameService()

@router.get("/", response_model=GameSchema)
def get_game():
    game = service.get_game()
    if not game:
        raise HTTPException(status_code=404, detail="Game not found")
    return game

@router.post("/", response_model=GameCreateResponse)
def create_game():
    game_id = service.create_game()
    return {"game_id": game_id}

@router.get("/{game_id}", response_model=GameSchema)
def get_game(game_id: str):
    game = service.get_game(game_id)
    if not game:
        raise HTTPException(status_code=404, detail="Game not found")
    return game

@router.post("/{game_id}/new_day", response_model=GameSchema)
def new_day(game_id: str):
    game = service.advance_day(game_id)
    if not game:
        raise HTTPException(status_code=404, detail="Game not found")
    return game
