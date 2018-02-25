import express from 'express'
const app = express()

app.get('/', (req,res) => {
  res.send('lol')
})

const port = process.env.PORT || 8080
app.listen(port)