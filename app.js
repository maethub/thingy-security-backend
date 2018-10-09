const Koa = require('koa');
const http = require('http');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const router = require('./routes');
const models = require('./models')

const app = new Koa();

app
  .use(logger())
  .use(bodyParser())
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

http.createServer(app.callback()).listen(3000);
