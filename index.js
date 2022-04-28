const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://chaeeon:ver12345@boileplate.ebeaz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  //useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false 몽고db6.0이상 기본적용되져있다
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})