"use strict";

require('marko/node-require').install();

const koa = require('koa');
const app = koa();

app.use(function *() {
	var template = require('./pages/main.marko');

	this.type = 'html'
	this.body = template.stream({
                site: { title: 'Pentaxclub beta' }
	});
});

app.listen(3000);

