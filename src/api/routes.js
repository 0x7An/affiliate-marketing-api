'use strict'

import Router from 'koa-router';
import { index, create, find, update, destroy } from './controllers/productsController';
import { allUrls, shorten, expand, click } from './controllers/urlsController';

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

// PRODUCTS
router.get('/products', index);
router.get('/product/:id', find);
router.put('/product/:id', update);
router.post('/product', create);
router.delete('/product', destroy);

export default router
