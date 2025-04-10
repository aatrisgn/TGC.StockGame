from pydantic import BaseModel

class Game(BaseModel):
    id: str
    name: str
    day: int = 0
    state: dict = {}
