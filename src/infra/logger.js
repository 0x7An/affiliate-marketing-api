import { env } from './env'
import { Bristol } from 'bristol'
import palin from 'palin'

export const logger = new Bristol()

if (env.LOG_LEVEL !== 'off') {
  logger.addTarget('console').withFormatter(palin, {
    rootFolderName: 'template'
  })
}
