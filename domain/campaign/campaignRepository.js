/**
 * Campaing repository.
 * This module handle all requests with the Camping Collection in mongo databases.
 * 
 * @module campaignRepository
 */

import mongoose from 'mongoose'
import { logger } from '../../infra/logger'
const Campaign = mongoose.model('Campaign')

const handleMongoQuery = async (queryCallback) => {
  try {
    let result = await queryCallback;
    return result
  } catch (error) {
    logger.error(error, { scope: 'Campaigns Repository' })
    return null;
  }
}

export const campaignRepository = {
    getAll : async () => handleMongoQuery(Campaign.find({})),
    getById : async (id) => handleMongoQuery(Campaign.findById(id)),
    create: async (userData) => handleMongoQuery(Campaign.create(userData)),
    update: async ({ id, fieldsToUpdate }) => handleMongoQuery(Campaign.update( { _id: id }, { $set : fieldsToUpdate })),
    destroy: async (id) => handleMongoQuery(Campaign.findByIdAndRemove(id))
};
