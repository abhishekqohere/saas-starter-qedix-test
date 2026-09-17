import { execaCommand } from 'execa';
import express from 'express';

const app = express();

app.use(express.json());

app.post('/qedix-benchmark', (req, res) => {
  return execaCommand(`ls ${req.query}`);
});

export { app };