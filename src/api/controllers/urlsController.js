/**
 * Urls controller.
 * This file provides all the methods exported in routes file.
 * All methods uses the url service api to handle business logic, and returns a http response.
 * @module Urls controller.
 */

'use strict'
import { urlsService } from '../../domain/urls/urlsService'

/**
 * handleResponse treat each interaction with services and handle the response
 */
const handleResponse = async (ctx, callback) => {
    let { status, data } = await callback    
    ctx.status = status
    ctx.body = data ? data : { "error" : "Internal server error"}
}

/**
 * allUrls retrive each shortned url on urls collection
 */
export const allUrls = async (ctx, next) => {
    await handleResponse(ctx, urlsService.getAll())
}

/**
 * shorten gets and url and user_id and respond a unique url
 * @example POST method
 * 
   { "url" : "https://twitter.com/home", "user_id" : "123" }
 */
export const shorten = async (ctx, next) => {
    let { url, user_id } = ctx.request.body
    await handleResponse(ctx, urlsService.shortUrl(url, user_id))
}

/**
 * expand get any shortned url and retrive the original url
 * @example GET method
   localhost:7003/url/expand/7eesTGw
 */
export const expand = async (ctx, next) => {
    const { url } = ctx.params;
    await handleResponse(ctx, urlsService.expandUrl(url))
}

/**
 * Click is the route where all tracked urls will hit and redirect to the original url
 * @example GET method
   localhost:7003/url/lyc_RXU
 */
export const click = async (ctx, next) => {
    const { url } = ctx.params
    const { host, origin, query, ip } = ctx.request

    let { data } = await urlsService.click(url, { host, origin, query, ip });
    ctx.status = 307
    ctx.redirect(data.original_url)
}
