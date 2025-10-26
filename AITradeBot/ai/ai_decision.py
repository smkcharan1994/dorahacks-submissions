import random

# Simple demo AI: predicts buy (1) or sell (0)
def predict_market():
    return random.choice(["BUY", "SELL"])

if __name__ == "__main__":
    prediction = predict_market()
    print(f"AI Prediction: {prediction}")
