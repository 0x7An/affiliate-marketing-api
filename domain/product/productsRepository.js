/**
 * Products repository.
 * This module handle all requests with the Products Collection in mongo databases.
 * 
 * @module productsRepository
 */

import mongoose from 'mongoose'
import { logger } from '../../infra/logger'
const Product = mongoose.model('Product')

const handleMongoQuery = async (queryCallback) => {
  try {
    let result = await queryCallback;
    return result
  } catch (error) {
    logger.error(error, { scope: 'Products Repository' })
    return null;
  }
}

export const productsRepository = {
    getAll : async () => handleMongoQuery(Product.find({})),
    getById : async (id) => handleMongoQuery(Product.findById(id)),
    create: async (userData) => handleMongoQuery(Product.create(userData)),
    update: async ({ id, fieldsToUpdate }) => handleMongoQuery(Product.update( { _id: id }, { $set : fieldsToUpdate })),
    destroy: async (id) => handleMongoQuery(Product.findByIdAndRemove(id))
};
