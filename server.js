var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var express = require('express')

var app = express()
  , bodyParser = require('body-parser')
  , chalk = require('chalk')
  , port = 3000
  , directoriesRouter = require('./routes/directories')
  , noticesRouter = require('./routes/notices')

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(express.static('public'))

app.use(bodyParser.json())

app.get('/', function (req, res) {
  //res.sendFile('index.html', { root: 'public' })
  res.sendFile(__dirname + '/public/index.html')
})

app.use('/directories', directoriesRouter)
app.use('/notices', noticesRouter)

var server = app.listen(3000, function (error) {
  var port = server.address().port
  if (error) {
    console.error(error)
  } else {
    console.info('==> Server for course started at %s port', chalk.green(port))
  }
})
