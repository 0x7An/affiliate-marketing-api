/**
 * Product Schema
 * This file describes the Product Model
 * 
 * @module ProductSchema
 */

import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
    lowercase: true,
  },
  categories: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const ProductsModel = mongoose.model('Product', ProductSchema);
