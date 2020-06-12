import express, { Express } from 'express';
import compression from 'compression';
import cors from 'cors';

import { PORT } from './configs/env';

import routes from './routes';
import('./database');

const app: Express = express();

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(PORT || 8080, () =>
	// tslint:disable-next-line: no-console
	console.log('server started!')
);
