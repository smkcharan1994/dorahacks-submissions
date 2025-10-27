// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GameAICompanion {
    string public agentName = "GameAI Companion";
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function getAgentStatus() public pure returns (string memory) {
        return "Agent active on Somnia Testnet";
    }

    function interact(string memory playerAction) public pure returns (string memory) {
        return string(abi.encodePacked("AI Companion responds to ", playerAction));
    }
}
