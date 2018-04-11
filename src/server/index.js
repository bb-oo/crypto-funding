import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import path from 'path';

import { createUser, validate, signInUser, createCampaign, getCampaigns } from './utils/routes';

const app = express();
const router = express.Router();

app.use(express.static(__dirname + '/../client/static'));
app.use(express.static(__dirname + '/../../build/'));
app.use(express.static(__dirname + '/../client/static/images/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/static/index.html'));
});

app.get('/user/:username', async (req, res) => {
  const response = await validate(req.params.username);
  res.json(response);
});

app.get('/search/campaigns/:campaign', async (req, res) => {
  const data = await getCampaigns(req.params.campaign);
  res.json(data);
});

app.post('/auth/user', async (req, res) => {
  const data = await signInUser(req.body);
  res.json(data);
});

app.post('/create/user', async (req, res) => {
  const data = await createUser(req.body);
  res.json(data);
});

app.post('/create/campaign', (req, res) => {
  createCampaign(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

app.listen(process.env.PORT);