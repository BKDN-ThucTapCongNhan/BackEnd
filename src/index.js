import express from 'express'
import ev from 'express-validation'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import methodOverride from 'method-override'
import compress from 'compression'
import helmet from 'helmet'
import { EventEmitter } from 'events'
import multiCores from './multi-cores'
import { commonLocale } from './locales'
import init from './init'
import route from './routes'
import responseBuilder from './utils/response-builder'
import errorUtil from './utils/error'
import env from './utils/env'

const mediator = new EventEmitter()
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(compress())
app.use(methodOverride())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'uploads')))

app.use(helmet())

multiCores(app, mediator)

if (env.isDevelopment()) {
  app.use(express.static(`${process.cwd()}/apidoc`))
  app.get('/apidoc', (req, res) => {
    res.sendFile(path.join(`${process.cwd()}/apidoc/index.html`))
  })
}

mediator.once('boot.ready', () => {
  console.log('SERVER BOOT READY!')
  init(app)

  app.use(route())
  app.use(handleNotFoundError)
  app.use(handleValidationError)
})

function handleNotFoundError(req, res) {
  console.log('404', req.url);
  return res.status(404).jsonp(responseBuilder.build(false, {}, errorUtil.parseError(commonLocale.apiNotFound)))
}

function handleValidationError(error, req, res) {
  if (error instanceof ev.ValidationError) {
    return res.status(error.status).jsonp(responseBuilder.build(false, {}, {
      code: error.status,
      message: error.errors[0].messages[0].split('"').join('').split('undefined').join('')
    }))
  } else {
    console.log('500', error)
    return res.status(500).jsonp(responseBuilder.build(false, {}, errorUtil.parseError(commonLocale.serverError)))
  }
}

export default app
