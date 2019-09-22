/**
 * Clicks repository.
 * This module handle all requests with the Clicks Collection in mongo databases.
 * 
 * @module clicksRepository
 */

import mongoose from 'mongoose'
import { logger } from '../../infra/logger'
const Click = mongoose.model('Click')

const handleMongoQuery = async (queryCallback) => {
  try {
    let result = await queryCallback;
    return result
  } catch (error) {
    logger.error(error, { scope: 'Clicks Repository' })
    return null;
  }
}

export const clicksRepository = {
    getAll : async () => handleMongoQuery(Click.find({})),
    getByUser : async (user_id) => handleMongoQuery(Click.findOne({ user_id: user_id })),
    create: async (clickData) => handleMongoQuery(Click.create(clickData)),
};
