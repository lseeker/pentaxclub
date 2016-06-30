"use strict";

require('marko/compiler').defaultOptions.writeToDisk = false;
require('marko/node-require').install();

const koa = require('koa');
const router = require('koa-router')();
const serve = require('koa-static');

const app = koa();

router.get('/', function*() {
	var template = require('./pages/main.marko');

	this.type = 'html'
	this.body = template.stream({
                site: { title: 'Pentaxclub beta' }
	});
});


app.use(serve('./public'));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

