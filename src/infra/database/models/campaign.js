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
  shop_id: {
    type: String,
    required: true,
    lowercase: true,
  },
  active: {
    type: String,
    required: true,
  },
  init_date: {
    type: String,
    required: true,
  },
  finish_date: {
    type: String
  },
  products: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const CampaignModel = mongoose.model('Campaign', CampaignSchema);
