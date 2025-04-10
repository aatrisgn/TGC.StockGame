from pydantic import BaseModel

class GameCreateResponse(BaseModel):
    game_id: str

class GameSchema(BaseModel):
    id: str
    name: str
    day: int
    state: dict
