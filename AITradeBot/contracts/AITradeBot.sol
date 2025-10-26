// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AITradeBot {
    address public owner;
    uint256 public lastPrediction;
    event TradeExecuted(address indexed user, uint256 amount, bool buy);

    constructor() {
        owner = msg.sender;
    }

    function executeTrade(bool buy, uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        if (buy) {
            emit TradeExecuted(msg.sender, amount, true);
        } else {
            emit TradeExecuted(msg.sender, amount, false);
        }
    }

    function updatePrediction(uint256 _prediction) external {
        require(msg.sender == owner, "Only owner can update");
        lastPrediction = _prediction;
    }
}
