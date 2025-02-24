const express = require("express")
const app = express()
const routes = require('./routes/route')
const connectdb = require('./connect-db')
const {URL} = require('./models/model')

app.use(express.json())    //middleware
connectdb('mongodb://127.0.0.1:27017/short-url')
          .then(()=>(console.log('MongoDB connected'))).catch((err)=>(console.log('err='+err)))
app.get('/' , async (req , res)=>(res.send('Hi, Welcome to this cheap copy of bitly')))
app.use('/url' , routes)
app.get('/url/:shortID', async(req , res)=> {
    const shortID = req.params.shortID 
    const entry = await URL.findOneAndUpdate(
        { shortID }, 
        { $push: { visit: { timestamp: Date.now() } } },
    );
    res.redirect(entry.ID)
})


app.listen(8000 , ()=>{return console.log(`Server started at 8000`)})