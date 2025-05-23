import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.join(import.meta.dirname, 'public')));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
