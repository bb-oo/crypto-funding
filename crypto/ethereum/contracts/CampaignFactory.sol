pragma solidity ^0.4.18;

import "./Campaign.sol" as Campaign;

contract CampaignFactory {
  address[] campaigns;

  event CreatedCampaign (
    address campaign,
    address organizer
  );
}