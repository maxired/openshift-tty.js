#!/usr/bin/env node

process.title = 'tty.js';
var tty =require('tty.js');

var conf = tty.config.readConfig();
conf.hostname = process.env['OPENSHIFT_DIY_IP'];
conf.port = process.env['OPENSHIFT_DIY_PORT'];
var app = tty.createServer(conf);


app.listen();
