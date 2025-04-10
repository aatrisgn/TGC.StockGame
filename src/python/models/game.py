from pydantic import BaseModel

class GameEntity(BaseModel):
    id: str
    name: str
    day: int = 0
    state: dict = {}
    counter: int
