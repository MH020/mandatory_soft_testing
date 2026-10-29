import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';

const app: Express = express();
app.use(cors<Request>());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

//404 splat message
app.all('/{*splat}', (req: Request, res: Response) => {
  res.status(404).send({ data: "Didn't match with a route" });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log('Server is running on port:', PORT)
});


