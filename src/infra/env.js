import yenv from 'yenv'
import { logger } from './logger'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

export const env = yenv('env.yaml', {
  message: key => `[yenv] ${key} not found in the loaded environment`,
  logBeforeThrow: message => logger.error(message)
})
