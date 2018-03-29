import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import path from 'path';

import { createUser, validate } from './utils/routes';

const app = express();
const router = express.Router();

app.use(express.static(__dirname + '/../client/static'));
app.use(express.static(__dirname + '/../../build/'));
app.use(express.static(__dirname + '/../client/static/images/'));
app.use(bodyParser.json());
app.use(helmet());

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/static/index.html'));
});

app.get('/validate/:username', async (req, res) => {
  const response = await validate(req.params.username);
  res.json(response);
})

app.post('/create/user', async (req, res) => {
  const data = await createUser(req.body);
  res.json(data);
});

app.listen(process.env.PORT);