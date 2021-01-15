import express from 'express';
require('dotenv').config();
const consign = require('consign');

const app = express();

app.use(express.json());

consign()
    .include('./config/db.ts')
    .then('./api')
    .then('./config/routes.ts')
    .into(app);

app.listen(3000, () => console.log('server running...'));