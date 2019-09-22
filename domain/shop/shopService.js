/**
 * Shop service.
 * This file handles all the business logic of shops.
 * 
 * @module ShopService
 */

import { shopRepository } from './shopRepository'
import { Service } from '../core/service'

class ShopService extends Service {
  constructor() {
    super();
    this.shopRepository = shopRepository;
  }

  async getAllShops() {
    let result = {}
    result.data = await this.shopRepository.getAll();
    result.status = result.data ? 200 : 500
    return result;
  }

  async getShopById(id) {
    let result = {}
    result.data = await this.shopRepository.getById(id)
    result.status = result.data ? 200 : 500
    return result
  }

  async createShop({  }) {
    let result = {}
    result.data = await this.shopRepository.create({  });
    result.status = result.data ? 200 : 500
    return result;
  }

  async updateShop({ id, payload  }) {
    let result = {}
    let fieldsToUpdate = _getFieldsToUpdate(payload)
    result.data = await this.shopRepository.updateShop({ id, fieldsToUpdate });
    result.status = result.data ? 200 : 500
    return result;
  }

  async destroy(id) {
    let result = {}
    result.data = await this.shopRepository.destroy(id);
    result.status = result.data ? 200 : 500
    return result;
  }
}

const _getFieldsToUpdate = (fields) => {
  return {
    ...fields.name && { name: fields.name },
    ...fields.domain && { domain: fields.domain },
    ...fields.active && { active: fields.active }
  }
}

export const shopService = new ShopService();
