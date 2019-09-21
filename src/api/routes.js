'use strict'

import Router from 'koa-router';
import { index, create, find, update, destroy } from './controllers/productsController';
import { shorten, expand } from './controllers/urlsController';

const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'Products Service';
});

// URLS
router.get('/url/shorten', shorten);
router.get('/url/expand', expand);

// PRODUCTS
router.get('/products', index);
router.get('/product/:id', find);
router.put('/product/:id', update);
router.post('/product', create);
router.delete('/product', destroy);

export default router
