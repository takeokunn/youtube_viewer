const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();
app.use(serve(path.join(__dirname, '/../public/')));

app.listen(2333);
