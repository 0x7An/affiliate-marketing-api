'use strict'

import Router from 'koa-router';
import { index, create, find, update, destroy } from './controllers/productsController';
import { allUrls, shorten, expand, click } from './controllers/urlsController';
import { AllCampaings, createCampaing, findCampaing, updateCampaing, destroyCampaing } from './controllers/campaignController';

const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'Afiiliate Marketing Service';
});

// URLS
router.get('/urls', allUrls);
router.post('/url/shorten', shorten);
router.get('/url/expand/:url', expand);

// CLICKS
router.get('/url/:url', click);
router.get('/clicks', click);

// PRODUCTS
router.get('/products', index);
router.get('/product/:id', find);
router.put('/product/:id', update);
router.post('/product', create);
router.delete('/product', destroy);

// CAMPAINGS 
router.get('/campaigns', AllCampaings);
router.get('/campaign/:id', findCampaing);
router.put('/campaign/:id', updateCampaing);
router.post('/campaign', createCampaing);
router.delete('/campaign', destroyCampaing);

export default router
