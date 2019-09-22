/**
 * Urls repository.
 * This module handle all requests with the Urls Collection in mongo databases.
 * 
 * @module urlsRepository
 */

import mongoose from 'mongoose'
import { logger } from '../../infra/logger'
import { click } from '../../api/controllers/urlsController';
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
    getByUrl : async (url) => handleMongoQuery(URL.findOne({ shortned_url: url })),

    clicked: async () => handleMongoQuery(URL.findOneAndUpdate({ shortned_url: url },
      { $setOnInsert: { clicks: clicks + 1 } }, { upsert: true }
    )),

    create: async (data) => handleMongoQuery(URL.create(data)),
    update: async ({ id, fieldsToUpdate }) => handleMongoQuery(URL.update( { _id: id }, { $set : fieldsToUpdate })),
    destroy: async (id) => handleMongoQuery(URL.findByIdAndRemove(id))
};
