import express, { NextFunction, Request, Response, application } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 8000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});

app.get('/', (request: Request, response: Response, next: NextFunction) => {
    response.json({ message: 'Hello there !' });
});
