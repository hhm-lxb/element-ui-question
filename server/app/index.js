const Koa = require('koa');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const parameter = require('koa-parameter');
const cors = require('koa2-cors')
const path = require('path');
const app = new Koa();
const routing = require('./routes');


app.use(koaStatic(path.join(__dirname, 'public')));
app.use(koaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, '/public/uploads'),
    keepExtensions: true,
  },
}));
app.use(cors())
app.use(parameter(app));
routing(app);

app.listen(3000, () => console.log('程序启动在 3000 端口了'));