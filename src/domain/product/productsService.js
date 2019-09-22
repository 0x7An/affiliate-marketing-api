/**
 * Products service.
 * This file handles all the business logic of products.
 * 
 * @module ProductService
 */

import { productsRepository } from './productsRepository'
import { Service } from '../core/service'

class ProductService extends Service {
  constructor() {
    super();
    this.productsRepository = productsRepository;
  }

  async getAllProducts() {
    let result = {}
    result.data = await this.productsRepository.getAll();
    result.status = result.data ? 200 : 500
    return result;
  }

  async getProductById(id) {
    let result = {}
    result.data = await this.productsRepository.getById(id)
    result.status = result.data ? 200 : 500
    return result
  }

  async createProduct({  }) {
    let result = {}
    result.data = await this.productsRepository.create({  });
    result.status = result.data ? 200 : 500
    return result;
  }

  async updateProduct({ id, payload  }) {
    let result = {}
    let fieldsToUpdate = _getFieldsToUpdate(payload)
    result.data = await this.productsRepository.updateProduct({ id, fieldsToUpdate });
    result.status = result.data ? 200 : 500
    return result;
  }

  async destroy(id) {
    let result = {}
    result.data = await this.productsRepository.destroy(id);
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

export const productsService = new ProductService();
