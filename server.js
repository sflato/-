const express = require("express")
const app = express()
const port = 80

app.use(express.static(`${__dirname}/www`))
app.listen(port , function(){
  console.log("running")
})

