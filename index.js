const express = require("express")
const app = express()
const routes = require('./routes/route')
const connectdb = require('./connect-db')


connectdb('mongodb://127.0.0.1:27017/short-url')
          .then(()=>(console.log('MongoDB connected'))).catch((err)=>(console.log('err='+err)))
app.use('/url' , routes)
app.listen((8000 , ()=>{console.log(`Server started at 8000`)}))