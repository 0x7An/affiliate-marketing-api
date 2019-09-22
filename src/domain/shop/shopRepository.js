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

export const ShopsRepository = {
    getAll : async () => handleMongoQuery(Shop.find({})),
    getById : async (id) => handleMongoQuery(Shop.findById(id)),
    create: async (userData) => handleMongoQuery(Shop.create(userData)),
    update: async ({ id, fieldsToUpdate }) => handleMongoQuery(Shop.update( { _id: id }, { $set : fieldsToUpdate })),
    destroy: async (id) => handleMongoQuery(Shop.findByIdAndRemove(id))
};