'use strict'

const bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    csrf = require('csurf'),
    express = require('express'),
    path = require('path'),
    pino = require('pino'),
    { ansi } = require('./etc/ansi/ansi')

const Test = require('./lib/Test')

const protectotron = csrf({ cookie: true })

const app = express(),
    PORT = process.env.PORT || 3001

app.use(bodyParser.text())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(cookieParser())

const initApp = async () => {
    const log = pino({ level: 'error' })

    app.use(express.static(path.join(__dirname, '../../client/build')))

    app.use('/api/test', Test)

    app.get('/api/auth/', protectotron, (req, res) => {
        const token = req.csrfToken()
        res.send({
            csrfToken: token
        })
    })

    app.use((req, res) => {
        res.sendFile(path.join(__dirname, '../../client/build/index.html'), function (err) {
            if (err) {
                res.status(500).send(err)
            }
        })
    })

    app.use(function (err, req, res, next) {
        if (err) {
            if (!res.finished) {
                const status = err.status || 500
                const title = err.message || err.toString()
                return res.status(status).json({title, status}).end()
            }
        }
        next();
    })

    app.listen(PORT, () => {
        console.info(`\n${ ansi.BG_Blue }${ ansi.Red } KATANA \u001b[0m running on port ${ ansi.Cyan }${ PORT }\u001b[0m\n`)
    })
}

try {
    if (module === require.main) {
        initApp()
            .then()
            .catch()
    }
} catch(e) { console.log(e) }
