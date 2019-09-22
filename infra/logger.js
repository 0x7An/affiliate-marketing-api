/**
 * logger file
 * This file create a instance of Bristol package, who are used all over the application.
 * 
 * @module logger
 */

import { env } from './env'
import { Bristol } from 'bristol'
import palin from 'palin'

export const logger = new Bristol()

if (env.LOG_LEVEL !== 'off') {
  logger.addTarget('console').withFormatter(palin, {
    rootFolderName: 'template'
  })
}
