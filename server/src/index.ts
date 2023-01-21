import express, {Request, Response} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AuthRoutes } from './routes';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

app.get('/', (req: Request, res: Response) => {
  res.send(`Hello World`);
});

app.use('/auth', AuthRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port = ${process.env.PORT}`);
})