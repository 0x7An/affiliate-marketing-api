'use strict'
import { productsService } from '../../domain/product/productsService'

const handleResponse = async (ctx, callback) => {
    let { status, data } = await callback    
    ctx.status = status
    ctx.body = data ? data : { "error" : "Internal server error"}
}

export const index = async (ctx, next) => {
    await handleResponse(ctx, productsService.getAllProducts())
}

export const find = async (ctx, next) => {
    const { id } = ctx.params;
    await handleResponse(ctx, productsService.getProductById(id))
}

export const create = async (ctx, next) => {
    const { name } = ctx.request.body
    await handleResponse(ctx, productsService.createProduct({ name }))
}

export const update = async (ctx, next) => {
    const { id, payload } = ctx.request.body
    await handleResponse(ctx, productsService.updateProduct({ id, payload }))
}

export const destroy = async (ctx, next) => {
    const { id } = ctx.request.body
    await handleResponse(ctx, productsService.destroy(id))
}
