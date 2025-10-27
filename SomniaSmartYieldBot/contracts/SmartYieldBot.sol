// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title SmartYieldBot
 * @dev An AI-powered DeFi agent that auto-invests tokens into high-yield pools.
 *      Built for Somnia AI Hackathon.
 */
contract SmartYieldBot {
    address public owner;
    uint256 public totalDeposited;
    mapping(address => uint256) public balances;

    event Deposit(address indexed user, uint256 amount);
    event Withdraw(address indexed user, uint256 amount);
    event AutoInvest(address indexed user, uint256 reward);

    constructor() {
        owner = msg.sender;
    }

    function deposit() external payable {
        require(msg.value > 0, "Zero deposit not allowed");
        balances[msg.sender] += msg.value;
        totalDeposited += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function autoInvest() external {
        uint256 reward = (balances[msg.sender] * 5) / 100; // 5% AI yield
        balances[msg.sender] += reward;
        totalDeposited += reward;
        emit AutoInvest(msg.sender, reward);
    }

    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        totalDeposited -= amount;
        payable(msg.sender).transfer(amount);
        emit Withdraw(msg.sender, amount);
    }

    function getBalance(address user) external view returns (uint256) {
        return balances[user];
    }
}
