from fastapi import FastAPI
from python.api.game import router as game_router

app = FastAPI(title="Game API")

app.include_router(game_router, prefix="/game", tags=["game"])
