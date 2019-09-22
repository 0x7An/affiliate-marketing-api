/**
 * Urls service.
 * This file handles all the business logic of urls.
 * 
 * @module UrlsService
 */

import { urlsRepository } from './urlsRepository'
import { clicksRepository } from '../clicks/clicksRepository'
import { Service } from '../core/service'
import nanoid from 'nanoid'
var geoip = require('geoip-lite');

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
       shortned_url: await this.generateShortUrl(),
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
    metadata.location = this.getLocationMetadata(metadata.ip)

    result.data = await this.urlsRepository.getByUrl(url)
    await this.clicksRepository.create({ url, metadata })
    result.status = result.data ? 200 : 500
    return result
  }

  async generateShortUrl() {
    let shortUrl = nanoid(7)
    let urlAlreadyExists = await this.urlsRepository.getByUrl(shortUrl)
    if (urlAlreadyExists) {
      this.generateShortUrl()
    }
    return shortUrl
  }

  getLocationMetadata(ip){
    let onlyNumberAndDots = /[\d.]+$/
    let ipMetadata = geoip.lookup(ip.match(onlyNumberAndDots)[0])
    console.log(ipMetadata)
    return ipMetadata
  }

}

export const urlsService = new UrlsService();
