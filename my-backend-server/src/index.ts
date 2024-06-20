import express from 'express';
import bodyParser from 'body-parser';
import { pingRouter } from './routes/ping';
import { submitRouter } from './routes/submit';
import { readRouter } from './routes/read';
import { submissionsRouter } from './routes/submissions';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/ping', pingRouter);
app.use('/submit', submitRouter);
app.use('/read', readRouter);
app.use('/submissions', submissionsRouter);

app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
