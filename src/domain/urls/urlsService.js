import { urlsRepository } from './urlsRepository'
import { Service } from '../core/service'

class UrlsService extends Service {
  constructor() {
    super();
    this.urlsRepository = urlsRepository;
  }

  async shortUrl(url) {
    let result = {}
    result.data = await this.urlsRepository.getAll();
    result.status = result.data ? 200 : 500
    return result;
  }

  async exapandUrl(url) {
    let result = {}
    result.data = await this.urlsRepository.getById(id)
    result.status = result.data ? 200 : 500
    return result
  }

}

export const urlsService = new UrlsService();
