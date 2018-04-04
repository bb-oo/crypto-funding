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

  
}