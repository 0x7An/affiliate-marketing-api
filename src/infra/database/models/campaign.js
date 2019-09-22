/**
 * Campaign Schema
 * This file describes the Campaing Model
 * 
 * @module CampaignSchema
 */

import mongoose from 'mongoose';

const CampaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  shop_id: { type: mongoose.Schema.ObjectId, ref: 'Shop' },
  active: {
    type: Boolean,
    required: true,
  },
  init_date: {
    type: Date,
    required: true,
  },
  finish_date: {
    type: Date
  },
  products: [{ type: mongoose.Schema.ObjectId, ref: 'Products' }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const CampaignModel = mongoose.model('Campaign', CampaignSchema);
