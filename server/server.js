import express from 'express';
import cors from 'cors';
import { getPlants } from './getPlants.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/plants', getPlants);
    
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 
