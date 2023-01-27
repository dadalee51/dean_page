const express = require('express')
const app = express()
const port = 3000
//global logging:
console.log("Welcome to code.");

//series of tests for javascript.
clg=(a)=>{console.log(a)};

clg('shooting star!!');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
