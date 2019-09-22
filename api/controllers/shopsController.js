/**
 * Shops controller.
 * This file provides all the methods exported in routes file.
 * All methods uses the shop service api to handle business logic, and returns a http response.
 * @module Shops controller.
 */

'use strict'
import { shopService } from '../../domain/shop/shopService'

const handleResponse = async (ctx, callback) => {
    let { status, data } = await callback    
    ctx.status = status
    ctx.body = data ? data : { "error" : "Internal server error"}
}

export const AllShops = async (ctx, next) => {
    await handleResponse(ctx, shopService.getAllShops())
}

export const findShop = async (ctx, next) => {
    const { id } = ctx.params;
    await handleResponse(ctx, shopService.getShopById(id))
}

export const createShop = async (ctx, next) => {
    const { name } = ctx.request.body
    await handleResponse(ctx, shopService.createShop({ name }))
}

export const updateShop = async (ctx, next) => {
    const { id, payload } = ctx.request.body
    await handleResponse(ctx, shopService.updateShop({ id, payload }))
}

export const destroyShop = async (ctx, next) => {
    const { id } = ctx.request.body
    await handleResponse(ctx, shopService.destroy(id))
}
