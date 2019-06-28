const express = require('express');
const router = express.Router();
const Product = require('../models/product.js');

//vrne VSE produkte
router.get('/products', function(req, res, next){
  Product.find({}).then(function(product){
    res.send(product);
  }).catch(next);
});


//doda nov produkt v bazo
//in ga vrne uporabniku
router.post('/product', function(req, res, next){
  Product.create(req.body).then(function(product){
    res.send(product);
  }).catch(next);
});


//vrne točno določen produkt (parameter ID)
router.get('/product/:id', function(req, res, next){
  Product.findOne({_id: req.params.id}).then(function(product){
    res.send(product);
  }).catch(next);
});


//izbriše točno določen produkt (glede na ID)
//in nam ga vrne
router.delete('/product/:id', function(req, res, next){
  Product.findOneAndDelete({_id: req.params.id}).then(function(product){
    res.send(product);
  }).catch(next);
});


//posodobi produkt glede na json, ki ga prejme
//v tem primeru pogleda ID produkta v json file-u in posodobi produkt s tem ID-jem
//vrne posodobljen produkt
router.put('/product', function(req, res, next){
  Product.findOneAndUpdate(req.body.id, { $set: req.body }, {new: true}).then(function(product){
        res.send(product);
    }).catch(next);
  });


module.exports = router;
