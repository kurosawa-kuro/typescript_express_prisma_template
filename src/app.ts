import express, { Request, Response } from 'express';

import { notFound, errorHandler } from './middlewares/errorMiddleware';
import setupLibrary from "./utils/setupLibrary";
import topRoute from './routes/topRoute';
import authRoute from './routes/authRoute';
import userRoute from './routes/userRoute';

const app: express.Express = express();

setupLibrary(app);

app.use('/api/', topRoute);
app.use('/api/uploads', express.static(__dirname + '/uploads'));
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

app.use(notFound);
app.use(errorHandler);

export default app;