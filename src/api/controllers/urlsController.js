'use strict'
import { urlsService } from '../../domain/urls/urlsService'

const handleResponse = async (ctx, callback) => {
    let { status, data } = await callback    
    ctx.status = status
    ctx.body = data ? data : { "error" : "Internal server error"}
}

export const shorten = async (ctx, next) => {
    await handleResponse(ctx, urlsService.shortURL())
}

export const expand = async (ctx, next) => {
    const { id } = ctx.params;
    await handleResponse(ctx, urlsService.expandUrl(id))
}
