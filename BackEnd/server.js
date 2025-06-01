import express from 'express';
import cors from 'cors';
import connectDb from './config/mongodb.js';
import foodRouter from './router/foodRouter.js';

const app = express();
const port =  process.env.PORT || 4000 


//middelware
app.use(express.json());
app.use(cors());
connectDb();


//api End Point 
app.use('/api/food',foodRouter);
app.use('/images',express.static('uploads'))

app.get('/api',(req,res) => {
    res.send("Api Working");
})


app.listen(port ,() =>  console.log(`server is running http://localhost:${port}`)); 


// mongodb+srv://indrayanip23:indrayanip23@cluster0.krneehl.mongodb.net/?