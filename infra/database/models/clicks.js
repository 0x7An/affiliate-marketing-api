/**
 * Click Schema
 * This file describes the Click Model
 * 
 * @module ClickSchema
 */

import mongoose from 'mongoose';

const ClickSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  metadata: {
    type: Object
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const ClicksModel = mongoose.model('Click', ClickSchema);
