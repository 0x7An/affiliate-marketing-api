/**
 * Shops repository.
 * This module handle all requests with the Shops Collection in mongo databases.
 * 
 * @module shopsRepository
 */

import mongoose from 'mongoose'
import { logger } from '../../infra/logger'
const Shop = mongoose.model('Shop')

const handleMongoQuery = async (queryCallback) => {
  try {
    let result = await queryCallback;
    return result
  } catch (error) {
    logger.error(error, { scope: 'Shops Repository' })
    return null;
  }
}

export const shopRepository = {
    getAll : async () => handleMongoQuery(Shop.find({})),
    getById : async (id) => handleMongoQuery(Shop.findById(id)),
    create: async (userData) => handleMongoQuery(Shop.create(userData)),
    update: async ({ id, fieldsToUpdate }) => handleMongoQuery(Shop.update( { _id: id }, { $set : fieldsToUpdate })),
    destroy: async (id) => handleMongoQuery(Shop.findByIdAndRemove(id))
};
