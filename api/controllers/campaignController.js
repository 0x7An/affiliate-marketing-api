/**
 * Campaing controller.
 * This file provides all the methods exported in routes file.
 * All methods uses the campaing service api to handle business logic, and returns a http response.
 * @module Campaing controller.
 */

'use strict'
import { campaignService } from '../../domain/campaign/campaignService'

const handleResponse = async (ctx, callback) => {
    let { status, data } = await callback    
    ctx.status = status
    ctx.body = data ? data : { "error" : "Internal server error"}
}

export const AllCampaings = async (ctx, next) => {
    await handleResponse(ctx, campaignService.getAllCampaings())
}

export const findCampaing = async (ctx, next) => {
    const { id } = ctx.params;
    await handleResponse(ctx, campaignService.getCampaignById(id))
}

export const createCampaing = async (ctx, next) => {
    const { name } = ctx.request.body
    await handleResponse(ctx, campaignService.createCampaign({ name }))
}

export const updateCampaing = async (ctx, next) => {
    const { id, payload } = ctx.request.body
    await handleResponse(ctx, campaignService.updateCampaign({ id, payload }))
}

export const destroyCampaing = async (ctx, next) => {
    const { id } = ctx.request.body
    await handleResponse(ctx, campaignService.destroy(id))
}
