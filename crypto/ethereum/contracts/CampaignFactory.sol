pragma solidity ^0.4.18;

import "./Campaign.sol";

contract CampaignFactory {
  address[] campaigns;

  event CreatedCampaign (
    address campaign,
    address organizer
  );

  function createNewCampaign (uint _goal, string _title) public {
    address newCampaign = new Campaign(_goal, _title);

    campaigns.push(newCampaign);
    CreatedCampaign(newCampaign, msg.sender);
  }
}