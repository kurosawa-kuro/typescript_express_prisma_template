import express, { Request, Response } from 'express';

import { notFound, errorHandler } from './middleware/errorMiddleware';
import setupLibrary from "./setupLibrary";
import topRoute from './routes/topRoute';
import authRoute from './routes/authRoute';
import userRoute from './routes/userRoute';

const app: express.Express = express();

setupLibrary(app);

app.use('/api/', topRoute);
app.use('/api/uploads', express.static('./uploads'));
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);


app.use(notFound);
app.use(errorHandler);

export default app;