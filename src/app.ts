import express from 'express';
import 'express-async-errors';
import 'dotenv/config';
import cors from 'cors';
import { handleApplicationErrors } from '@/middlewares';
import { authenticationRouter, usersRouter } from '@/routers';

const app = express();
const port = process.env.PORT;

app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('Ok'))
  .use('/users', usersRouter)
  .use('/auth', authenticationRouter)
  .use(handleApplicationErrors);

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
