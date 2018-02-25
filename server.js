import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from './webpack.config.js'

const app = express()
app.use(webpackMiddleware(webpack(webpackConfig))

app.get('/api', (req,res) => {
  
})

const port = process.env.PORT || 8080
app.listen(port)