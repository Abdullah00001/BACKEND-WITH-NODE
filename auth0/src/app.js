import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

import userRouter from './routes/user.routes.js';
import blogRouter from './routes/blog.routes.js';

app.use('/api/v1/user', userRouter);
app.use('/api/v1/blog', blogRouter);

export { app };
