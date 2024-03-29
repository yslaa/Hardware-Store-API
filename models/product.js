const mongoose = require("mongoose");
const { RESOURCE } = require("../constants/index");

const productSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please enter a user"],
    ref: RESOURCE.USER,
  },
  product_name: {
    type: String,
    required: [true, "Please enter a product name"],
    maxLength: [30, "The product name cannot exceed 30 characters"],
  },
  type: {
    type: String,
    required: [true, "Please enter a type of your product"],
  },
  class: {
    type: String,
    required: [true, "Please enter a class of your product"],
  },
  variant: {
    type: String,
    enum: ["Local", "International"],
    default: "Local",
  },
  price: {
    type: Number,
    required: [true, "Please enter a price"],
  },
  stock: {
    type: Number,
    required: [true, "Enter the quantity of the Product"],
    maxlength: [4, "Product cant exceed up to 4 digits"],
    default: 0,
  },
  image: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      originalname: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model(RESOURCE.PRODUCT, productSchema);
