const jsonServer = require('json-server')
const cookieParser = require('cookie-parser')

const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 4000

server.use(cookieParser('MYCOOKIES'))
server.use(jsonServer.bodyParser)
server.use(middlewares)

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//mock server delay:
server.use(function (req, res, next) {
    var del = getRandomInt(100, 4000)
    console.log('### using random delay of ' + del + ' ms')
    setTimeout(next, del)
})

server.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
    next()
})

server.post('/calculate-assets', (request, response) => {
    if (request.method === 'POST') {

        const assets = require('./calculate/calculate-assets')
        // response.cookie('test', '1', { signed: true, httpOnly: true })
        response.status(200).jsonp(assets({...request.body}))
    }
})

server.listen(port, () => {
    console.log('JSON Server is running')
})
