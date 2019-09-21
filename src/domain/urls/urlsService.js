import { urlsRepository } from './urlsRepository'
import { clicksRepository } from '../clicks/clicksRepository'
import { Service } from '../core/service'
import nanoid from 'nanoid'

class UrlsService extends Service {
  constructor() {
    super();
    this.urlsRepository = urlsRepository;
    this.clicksRepository = clicksRepository;
  }

  async getAll() {
    let result = {}
    result.data = await this.urlsRepository.getAll();
    result.status = result.data ? 200 : 500
    return result;
  }

  async shortUrl(url, user_id) {
    let result = {}

    let data = {
       original_url: url,
       shortned_url: nanoid(7),
       clicks: 0,
       user_id: user_id
    }

    result.data = await this.urlsRepository.create(data);
    result.status = result.data ? 200 : 500
    return result;
  }

  async expandUrl(url) {
    let result = {}
    result.data = await this.urlsRepository.getByUrl(url)
    result.status = result.data ? 200 : 500
    return result
  }

  async click(url, metadata) {
    let result = {}
    metadata.clickTime = new Date().toISOString()
    result.data = await this.urlsRepository.getByUrl(url)
    await this.clicksRepository.create({ url, metadata })
    result.status = result.data ? 200 : 500
    return result
  }
}

export const urlsService = new UrlsService();
