import express from 'express';
import teamRouter from './Team/teamRoute';
import playerRouter from './Player/playerRoute';

const app = express();

app.use(express.json());

app.use('/api/teams', teamRouter);
app.use('/api/players', playerRouter);

export default app;