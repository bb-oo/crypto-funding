import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import path from 'path';

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

app.listen(process.env.PORT);