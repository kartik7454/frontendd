const connectToMongo = require('./mongoose');
const express = require('express')
connectToMongo()
const app =express()
const port = 5000
app.get('/', (req, res) => {
res.send ('hi')
})
app.listen(port, () => { 
console.log("Example app listening at 5000")
})
