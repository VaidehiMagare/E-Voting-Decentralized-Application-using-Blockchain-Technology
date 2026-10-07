// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Voting {

    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    Candidate[] public candidates;

    mapping(address => bool) public hasVoted;

    address public admin;

    bool public electionStarted;
    bool public electionEnded;


    constructor() {
        admin = msg.sender;
    }


    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }


    function addCandidate(string memory _name) public onlyAdmin {
        require(!electionStarted, "Election already started");

        uint candidateId = candidates.length;

        candidates.push(
            Candidate(candidateId, _name, 0)
        );
    }


    function startElection() public onlyAdmin {
        require(!electionStarted, "Election already started");

        electionStarted = true;
        electionEnded = false;
    }


    function endElection() public onlyAdmin {
        require(electionStarted, "Election has not started");

        electionEnded = true;
    }


    function vote(uint _candidateId) public {
        require(electionStarted, "Election has not started");
        require(!electionEnded, "Election has ended");
        require(!hasVoted[msg.sender], "You have already voted");
        require(_candidateId < candidates.length, "Invalid candidate");

        candidates[_candidateId].voteCount++;

        hasVoted[msg.sender] = true;
    }


    function getCandidateCount() public view returns (uint) {
        return candidates.length;
    }
}