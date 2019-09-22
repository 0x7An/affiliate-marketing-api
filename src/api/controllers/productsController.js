/**
 * Products controller.
 * This file provides all the methods exported in routes file.
 * All methods uses the product service api to handle business logic, and returns a http response.
 * @module Products controller.
 */

'use strict'
import { productsService } from '../../domain/product/productsService'

const handleResponse = async (ctx, callback) => {
    let { status, data } = await callback    
    ctx.status = status
    ctx.body = data ? data : { "error" : "Internal server error"}
}

export const allProducts = async (ctx, next) => {
    await handleResponse(ctx, productsService.getAllProducts())
}

export const findProduct = async (ctx, next) => {
    const { id } = ctx.params;
    await handleResponse(ctx, productsService.getProductById(id))
}

export const createProduct = async (ctx, next) => {
    const { name } = ctx.request.body
    await handleResponse(ctx, productsService.createProduct({ name }))
}

export const updateProduct = async (ctx, next) => {
    const { id, payload } = ctx.request.body
    await handleResponse(ctx, productsService.updateProduct({ id, payload }))
}

export const destroyProduct = async (ctx, next) => {
    const { id } = ctx.request.body
    await handleResponse(ctx, productsService.destroy(id))
}
