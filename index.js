const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//vzpostavitev expressa
const app = express();

//povezava z mongodb
mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb://localhost/myDB", {useNewUrlParser: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//routes importani iz api.js
app.use('/api', require('./routes/api'));

//handlanje errorjev
app.use(function(err, req, res, next){
  res.status(422).send({error: err.message});
});

//poslušalec
app.listen(process.env.port||4000, function(){
  console.log("Dela");
});
