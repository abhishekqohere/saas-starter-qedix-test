import { execaCommand } from 'execa';
import express from 'express';

const app = express();

app.use(express.json());

app.post('/qedix-benchmark', (req, res) => {
  const commandPart = req.query;

  return execaCommand(`ls ${commandPart}`);
});

export { app };