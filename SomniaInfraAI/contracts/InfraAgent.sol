// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InfraAgent {
    address public owner;
    uint256 public uptimeScore;
    uint256 public gasUsage;
    uint256 public alertCount;

    event AlertTriggered(string message, uint256 timestamp);
    event PerformanceOptimized(uint256 newUptime, uint256 timestamp);

    constructor() {
        owner = msg.sender;
        uptimeScore = 100;
        gasUsage = 0;
        alertCount = 0;
    }

    function recordPerformance(uint256 _uptime, uint256 _gasUsage) public {
        require(msg.sender == owner, "Only owner can record performance");
        uptimeScore = _uptime;
        gasUsage = _gasUsage;

        if (_uptime < 90) {
            alertCount++;
            emit AlertTriggered("Uptime below threshold!", block.timestamp);
        } else {
            emit PerformanceOptimized(_uptime, block.timestamp);
        }
    }

    function getStats() public view returns (uint256, uint256, uint256) {
        return (uptimeScore, gasUsage, alertCount);
    }
}
