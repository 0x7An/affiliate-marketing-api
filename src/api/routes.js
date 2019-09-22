 /**
 * Routes file
 * This file describes any external endpoint of our application, calling their respective controllers.
 * 
 * @module router
 */

'use strict'

import Router from 'koa-router';
import { allProducts, createProduct, findProduct, updateProduct, destroyProduct } from './controllers/productsController';
import { allUrls, shorten, expand, click } from './controllers/urlsController';
import { AllCampaings, createCampaing, findCampaing, updateCampaing, destroyCampaing } from './controllers/campaignController';
import { AllShops, createShop, findShop, updateShop, destroyShop } from './controllers/shopsController';

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
router.get('/products', allProducts);
router.get('/product/:id', findProduct);
router.put('/product/:id', updateProduct);
router.post('/product', createProduct);
router.delete('/product', destroyProduct);

// CAMPAINGS 
router.get('/campaigns', AllCampaings);
router.get('/campaign/:id', findCampaing);
router.put('/campaign/:id', updateCampaing);
router.post('/campaign', createCampaing);
router.delete('/campaign', destroyCampaing);

router.get('/shops', AllShops);
router.get('/shop/:id', findShop);
router.put('/shop/:id', updateShop);
router.post('/shop', createShop);
router.delete('/shop', destroyShop);

export default router
