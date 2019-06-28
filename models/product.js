const mongoose = require('mongoose');
const Shema = mongoose.Schema;

//ustvarjanje nove sheme product
//nekateri atributi imajo nastavljeno default vrednost,
//po potrebi se lahko nastavi tudi tako, da so obvezni
// (v tem primeru name)

const productShema = new Shema({
  name: {
    type: String,
    required: [true, "Obvezno ime!"]
  },

  price: {
    type: Number,
    default: 0
  },

  available: {
    type: Boolean,
    default: false
  },

  dateCreated:{
    type: String,
    default: new Date().toTimeString()
  }
});


//exportanje za kasnejšo uporabo v api datoteki
const Product = mongoose.model('product', productShema);
module.exports = Product;
