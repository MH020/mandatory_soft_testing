import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';
import path from 'path';

const PORT: number = 8080;
const __dirname = path.resolve('.');
const app: Express = express();

app.use(cors<Request>());
app.use(express.static(path.join(__dirname, 'public'))); //sending css + js files with html views.

// Serve index.html landing page
app.get('/', (req: Request, res: Response) => {
  const publicDir = path.join(__dirname, 'public');
  res.sendFile(path.join(publicDir, 'index.html'));
});

//404 splat message
app.all('/{*splat}', (req: Request, res: Response) => {
  res.status(404).send({ data: "Didn't match with a route" });
});

app.listen(PORT, () => {
  console.log('Server is running on port:', PORT)
});


