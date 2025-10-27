from fastapi import FastAPI
from monitor import check_health
import uvicorn

app = FastAPI()

@app.get("/health")
def get_health():
    return check_health()

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
