import app from './app';
import { prismaClient } from './config/prisma';


prismaClient.$connect().then(() => {
    console.log('connected to database');
}).catch((err) => {
    console.log(err);
});

app.listen(3000, (err) => {
    console.log('app is listening on port 3000');
});