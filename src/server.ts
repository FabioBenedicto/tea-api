import 'dotenv/config';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';

import { router } from './routes';
import { handleErrorsMiddleware } from '@middlewares/handle-errors-middleware';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/profile-picture', express.static('upload/images'));
app.use(router);

app.use(handleErrorsMiddleware);

app.listen(process.env.PORT || 3333);
