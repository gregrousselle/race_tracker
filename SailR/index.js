const express = require('express')
const app = express()
const port = 80

// Statics
app.use('/static',express.static(__dirname + '/static'));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})