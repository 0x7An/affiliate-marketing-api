/**
 * Url Schema
 * This file describes the Url Model
 * 
 * @module UrlSchema
 */

import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
  original_url: {
    type: String,
    required: true,
  },
  shortned_url: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const UrlsModel = mongoose.model('Url', UrlSchema);
