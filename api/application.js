/**
 * Application file
 * This is the application file, where we return an koajs server with middlewares.
 * 
 * @module Application
 */

import * as http from 'http'
import Koa from 'koa'
import cors from '@koa/cors'
import respond from 'koa-respond'
import bodyParser from 'koa-bodyparser'
import compress from 'koa-compress'
import { logger } from '../infra/logger'
import { notFoundHandler } from './middlewares/not-found'
import { errorHandler } from './middlewares/error-handler'
import mongoose from '../infra/database/mongoose'

import router from './routes'

/**
 * Creates and returns a new Koa application.
 *
 * @return {Promise<http.Server>} The configured app.
 */
export async function createServer() {
  logger.debug('Creating products service...')
  const app = new Koa()

  app
    .use(errorHandler)
    .use(compress())
    .use(respond())
    .use(cors())
    .use(bodyParser())
    .use(router.routes())
    .use(notFoundHandler)

  const server = http.createServer(app.callback())

  server.on('close', () => {
    logger.debug('Server closing, bye!')
  })

  logger.debug('Products Service created, ready to listen', { scope: 'startup' })
  return server
}
