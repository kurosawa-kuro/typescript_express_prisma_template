import listEndpoints from 'express-list-endpoints';
import app from "./app";

app.listen(8000, (): void => {
    console.log(listEndpoints(app));
    console.log('listening to port 8000')
});