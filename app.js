import bodyParser from 'body-parser';
import express from 'express';
// import 'dotenv/config';

import eventRoutes from './routes/events.js';

const app = express();

app.use(bodyParser.json());

app.use(eventRoutes);
console.log('Running on port: ', process.env.PORT);
app.listen(process.env.PORT);
