import express, { NextFunction, Request, Response, application } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();


app.listen(Number(process.env.PORT) || 8000, process.env.HOST || "localhost", () => {
    console.log(`Server is running at http://${process.env.HOST}:${process.env.PORT}`);
});

app.get('/', (request: Request, response: Response, next: NextFunction) => {
    response.json({ message: 'Hello there !' });
});
