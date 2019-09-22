/**
 * Campaing service.
 * This file handles all the business logic of campaings.
 * 
 * @module CampaignService
 */

import { campaignRepository } from './campaignRepository'
import { Service } from '../core/service'

class CampaignService extends Service {
  constructor() {
    super();
    this.campaignRepository = campaignRepository;
  }

  async getAllCampaign() {
    let result = {}
    result.data = await this.campaignRepository.getAll();
    result.status = result.data ? 200 : 500
    return result;
  }

  async getCampaignById(id) {
    let result = {}
    result.data = await this.campaignRepository.getById(id)
    result.status = result.data ? 200 : 500
    return result
  }

  async createCampaign({  }) {
    let result = {}
    result.data = await this.campaignRepository.create({  });
    result.status = result.data ? 200 : 500
    return result;
  }

  async updateCampaign({ id, payload  }) {
    let result = {}
    let fieldsToUpdate = _getFieldsToUpdate(payload)
    result.data = await this.campaignRepository.updateCampaign({ id, fieldsToUpdate });
    result.status = result.data ? 200 : 500
    return result;
  }

  async destroy(id) {
    let result = {}
    result.data = await this.campaignRepository.destroy(id);
    result.status = result.data ? 200 : 500
    return result;
  }
}

const _getFieldsToUpdate = (fields) => {
    return {
      ...fields.name && { name: fields.name },
      ...fields.description && { description: fields.description },
      ...fields.price && { price: fields.price },
      ...fields.image_url && { image_url: fields.image_url },
      ...fields.product_url && { product_url: fields.product_url },
      ...fields.categories && { categories: fields.categories },
      ...fields.details && { details: fields.details }
    }
}

export const campaignService = new CampaignService();
