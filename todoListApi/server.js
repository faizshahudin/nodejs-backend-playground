var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),//created model
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://faizshahudin:mlabopan09871234@ds219879.mlab.com:19879/todolist_api')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(function (req,res) {
//    res.status(404).send({ url: req.originalUrl + 'not found' })
//});

var routes = require('./api/routes/todoListRoutes'); // importing
routes(app); // register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
