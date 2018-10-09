const Router = require('koa-router');
const router = new Router();

// Error handling
router.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.log(error);
    ctx.status = error.status || 500;
    ctx.type = 'json';
    ctx.body = { 'error': error.message || 'Something went wrong!' };
    ctx.app.emit('error', error, ctx);
  }
});

// Routes
router.get('/hello', async (ctx, next) => {
  ctx.body = 'Hello World';
  await next();
});

module.exports = router;
