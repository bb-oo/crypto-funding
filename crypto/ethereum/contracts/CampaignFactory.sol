pragma solidity ^0.4.21;

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
    emit CreatedCampaign(newCampaign, msg.sender);
  }

  function checkAddress (address campaignAddress) public view returns (bool) {
    bool exists = false;

    for (uint i = 0; i < campaigns.length; i++) {
      if (campaignAddress == campaigns[i]) {
        exists = true;
      }
    }

    return exists;
  }
}