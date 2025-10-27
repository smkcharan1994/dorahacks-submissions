# Dummy AI model for GameAI Companion
# Replace this with a real TensorFlow/PyTorch model if desired

def get_ai_response(action):
    responses = {
        "attack": "AI Companion assists with a tactical strike!",
        "defend": "AI Companion shields you!",
        "explore": "AI Companion scans the map!"
    }
    return responses.get(action.lower(), "AI Companion is idle.")
