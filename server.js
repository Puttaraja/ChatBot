var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('views','./views')
app.set('view engine','ejs');

var urlencodedparser = bodyParser.urlencoded({ extended : false });

app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/js',express.static(__dirname + 'public/js'));
app.use('/img',express.static(__dirname + 'public/img'));

app.get('',function (req,res) {
	res.render('main');
});

app.get('/index',function (req,res) {
	res.render('index');
});

app.listen(3000);