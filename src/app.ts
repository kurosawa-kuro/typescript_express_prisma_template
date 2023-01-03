import express, { Request, Response } from 'express';

import { notFound, errorHandler } from './middleware/errorMiddleware';
import setupLibrary from "./setupLibrary";
import topRoute from './routes/topRoute';
import userRoute from './routes/userRoute';

const app: express.Express = express();

setupLibrary(app);

app.use('/', topRoute);
app.use('/users', userRoute);

app.use(notFound);
app.use(errorHandler);

export default app;