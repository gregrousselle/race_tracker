const express = require('express')
const app = express()
const port = process.env.PORT || 2020

// Statics
app.use('/static',express.static(__dirname + '/static'));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})