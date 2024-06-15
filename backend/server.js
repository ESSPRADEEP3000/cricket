const express=require('express')
const connectDB=require('./config/db')
const cors=require('cors')
const app=express()
//connect to mongoDb
connectDB();
//Middleware
app.use(express.json());
app.use(cors());
//define routes
app.use('/api/auth',require('./routes/auth'));
const PORT=process.env.PORT ||5500;
app.listen(PORT,()=>console.log(`server started and running on ${PORT}`))