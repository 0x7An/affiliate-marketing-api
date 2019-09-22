/**
 * Shop Schema
 * This file describes the Shop Model
 * 
 * @module Shopchema
 */

import mongoose from 'mongoose';

const ShopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const ShopModel = mongoose.model('Shop', ShopSchema);
