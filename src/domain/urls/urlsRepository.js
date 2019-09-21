import mongoose from 'mongoose'
import { logger } from '../../infra/logger'
const URL = mongoose.model('Url')

const handleMongoQuery = async (queryCallback) => {
  try {
    let result = await queryCallback;
    return result
  } catch (error) {
    logger.error(error, { scope: 'urls Repository' })
    return null;
  }
}

export const urlsRepository = {
    getAll : async () => handleMongoQuery(URL.find({})),
    getByUrl : async (url) => handleMongoQuery(URL.findOne({ "shortned_url": url })),
    create: async (data) => handleMongoQuery(URL.create(data)),
    update: async ({ id, fieldsToUpdate }) => handleMongoQuery(URL.update( { _id: id }, { $set : fieldsToUpdate })),
    destroy: async (id) => handleMongoQuery(URL.findByIdAndRemove(id))
};
