import express from 'express';
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {    
    res.send(`Server is running on port ${PORT}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});