import axios from 'axios';
import Web3 from 'web3';
import campaignFactoryJSON from '../../../crypto/ethereum/abi/campaign-factory.json';

import history from '../utils/history';
import { isZip, validateEtherAmount, validateText } from './helpers';

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  throw new Error('Warning: No web3 instance was detected. Please ensure you have a web3 provider like Metamask.')
}

const factory = new web3.eth.Contract(campaignFactoryJSON, '0x39131811c580ed9d279cd0ff6d872a60a1bdbfab');

export const onSubmit = values => {
  return async (dispatch, getState) => {
    let campaignAddress;
    const goal = web3.utils.toWei(values.goal, 'ether');

    await factory.methods.createNewCampaign(goal, values.title);

    const event = factory.events.CreatedCampaign((err, evnt) => {
      if (err) {
        throw new Error(err);
      } else {
        campaignAddress = evnt.args.campaign;
      }
    });

    values.campaignAddress = campaignAddress;

    const data = await axios.post('/create/campaign', values);    
  };
};

export const onSubmitSuccess = values => {
  return (dispatch, getState) => {
    history.push('/')
  };
};

export const validate = ({ goal = null, title = '', target = '', zip = null, category = '' }) => {
  const errors = {};

  errors.goal = validateEtherAmount(goal);
  errors.title = validateText(title);
  errors.target = validateText(target);
  errors.zip = isZip(zip) ? null : 'Invalid ZIP code.';
  errors.category = validateText(category);

  return errors;
};
