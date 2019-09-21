import { urlsRepository } from './urlsRepository'
import { Service } from '../core/service'
import nanoid from 'nanoid'

class UrlsService extends Service {
  constructor() {
    super();
    this.urlsRepository = urlsRepository;
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

  async click(url) {
    let result = {}
    result.data = await this.urlsRepository.getByUrl(url)
    result.status = result.data ? 200 : 500
    return result
  }

}

export const urlsService = new UrlsService();
