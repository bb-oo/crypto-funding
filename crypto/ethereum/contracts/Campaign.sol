pragma solidity ^0.4.18;

contract Campaign {
  address organizer;
  string title;
  uint goal;
  uint totalDonations;

  struct Participant {
    string name;
    uint donation;
  }

  mapping(address => Participant) public participants;
  address[] public participantAddresses;

  modifier onlyOrganizer {
    if (msg.sender == organizer) {
      _;
    }
  }

  function Campaign (uint _goal, string _title) public {
    organizer = msg.sender;
    goal = _goal;
    title = _title;
  }

  function donate (string _name) public payable {
    address e = msg.sender;
    totalDonations = totalDonations + msg.value; 

    participants[e].name = _name;
    participants[e].donation = msg.value; 
  }
}