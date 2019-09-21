'use strict'
import { urlsService } from '../../domain/urls/urlsService'

const handleResponse = async (ctx, callback) => {
    let { status, data } = await callback    
    ctx.status = status
    ctx.body = data ? data : { "error" : "Internal server error"}
}

export const shorten = async (ctx, next) => {
    let { url, user_id } = ctx.request.body
    await handleResponse(ctx, urlsService.shortUrl(url, user_id))
}

export const expand = async (ctx, next) => {
    const { url } = ctx.params;
    await handleResponse(ctx, urlsService.expandUrl(url))
}

export const click = async (ctx, next) => {
    const { url } = ctx.params
    console.log('ANDERSON', ctx)
    let { data } = await urlsService.click(url);
    ctx.status = 307
    ctx.redirect(data.original_url)
}
