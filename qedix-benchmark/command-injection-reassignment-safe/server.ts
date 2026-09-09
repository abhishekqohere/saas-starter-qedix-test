import { execaCommand } from 'execa';
import express from 'express';

const app = express();

app.use(express.json());

app.post('/qedix-benchmark', (req, res) => {
  const query = req.query;
  let commandPart = query;

  commandPart = 'fixed';

  return execaCommand(`ls ${commandPart}`);
});

export { app };