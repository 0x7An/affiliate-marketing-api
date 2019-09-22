 /**
 * notFoundHandler middlware file
 * This middleware is reponsible to take action in any not found request in our server.
 * 
 * @module notFoundHandler
 */

export async function notFoundHandler(ctx) {
    const msg = `${ctx.request.method} ${ctx.request.path}`
    ctx.notFound({
      message: `No endpoint matched your request: ${msg}`
    })
  }
  