# api

CRUD API z uporabo Express za routing in Mongoose za interakcijo z MongoDB bazo



Za delovanje potrebuje naslednje installe:

$ npm install express --save

$ npm install mongoose

$ npm install body-parser




Routi, ki jih API omogoča:

[GET] /products

[POST] /product

[GET] /product/:id

[DELETE] /product/:id

[PUT] /product



Na  [GET] /products  dobi response s sledečo shemo:

[

  {

    name : 'Computer 1',

    price : 1200,

    available: true,

    dateCreated:'Mon Oct 03 2016 15:22:08 GMT+0200 (CEST)'

  },

  {

    name : 'Computer 2',

    price : 1300,

    available: false,

    dateCreated:'Mon Oct 03 2016 15:22:08 GMT+0200 (CEST)'

  }

]
